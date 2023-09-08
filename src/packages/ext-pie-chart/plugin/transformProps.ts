import {
  CategoricalColorNamespace,
  getColumnLabel,
  getMetricLabel,
} from '@superset-ui/core';
import { EChartsCoreOption, PieSeriesOption } from 'echarts';
import { extractGroupbyLabel, getColtypesMapping } from '../../../utils/series';
import { DEFAULT_PIE_FORM_DATA } from '../constants';
import {
  ExtPieChartFormData,
  ExtPieChartProps,
  ExtPieTransformProps,
} from '../types';

export default function transformProps(
  chartProps: ExtPieChartProps
): ExtPieTransformProps {
  const { width, height, formData, queriesData, theme } = chartProps;
  const {
    title,
    colorScheme,
    animation,
    groupby,
    metric,
    donut,
    innerRadius,
    outerRadius,
  }: ExtPieChartFormData = {
    ...DEFAULT_PIE_FORM_DATA,
    ...formData,
  };
  const { data = [] } = queriesData[0];

  const metricLabel = getMetricLabel(metric);
  const groupbyLabels = groupby.map(getColumnLabel);
  const coltypeMapping = getColtypesMapping(queriesData[0]);
  const colorFn = CategoricalColorNamespace.getScale(colorScheme as string);

  const transformedData: PieSeriesOption[] = data.map((datum) => {
    const name = extractGroupbyLabel({
      datum,
      groupby: groupbyLabels,
      coltypeMapping,
    });

    return {
      value: datum[metricLabel],
      name,
      itemStyle: {
        color: colorFn(name),
      },
    };
  });

  const series: PieSeriesOption[] = [
    {
      name: title,
      type: 'pie',
      animation,
      radius: [`${donut ? innerRadius : 0}%`, `${outerRadius}%`],
      center: ['50%', '50%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      emphasis: {
        label: {
          show: true,
          fontWeight: 'bold',
          backgroundColor: theme.colors.grayscale.light5,
        },
      },
      data: transformedData,
    },
  ];

  const echartOptions: EChartsCoreOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      type: 'scroll',
      orient: 'horizontal',
    },
    series,
  };

  return {
    width,
    height,
    echartOptions,
    formData,
    theme,
  };
}
