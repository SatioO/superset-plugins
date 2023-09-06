import {
  CategoricalColorNamespace,
  getColumnLabel,
  getMetricLabel,
  getTimeFormatter,
} from '@superset-ui/core';
import { EChartsCoreOption, PieSeriesOption } from 'echarts';
import { DEFAULT_LEGEND_FORM_DATA, OpacityEnum } from '../../../constants';
import { convertInteger } from '../../../utils/convertInteger';
import { extractGroupbyLabel, getColtypesMapping } from '../../../utils/series';
import {
  DEFAULT_FORM_DATA,
  ExtPieChartProps,
  ExtPieChartTransformedProps,
} from '../types';

export default function transformProps(
  chartProps: ExtPieChartProps
): ExtPieChartTransformedProps {
  const { width, height, formData, queriesData, filterState, theme } =
    chartProps;
  const { data = [] } = queriesData[0];
  const {
    colorScheme,
    donut,
    groupby,
    innerRadius,
    labelsOutside,
    labelLine,
    metric = '',
    dateFormat,
    outerRadius,
    showLabels,
  } = {
    ...DEFAULT_LEGEND_FORM_DATA,
    ...DEFAULT_FORM_DATA,
    ...formData,
  };

  const metricLabel = getMetricLabel(metric);
  const groupbyLabels = groupby.map(getColumnLabel);
  const coltypeMapping = getColtypesMapping(queriesData[0]);

  const defaultLabel = {
    show: showLabels,
    color: theme.colors.grayscale.dark2,
  };

  const colorFn = CategoricalColorNamespace.getScale(colorScheme as string);

  let totalValue = 0;
  const transformedData: PieSeriesOption[] = data.map((datum) => {
    const name = extractGroupbyLabel({
      datum,
      groupby: groupbyLabels,
      coltypeMapping,
      timeFormatter: getTimeFormatter(dateFormat),
    });

    const isFiltered =
      filterState.selectedValues && !filterState.selectedValues.includes(name);
    const value = datum[metricLabel];

    if (typeof value === 'number' || typeof value === 'string') {
      totalValue += convertInteger(value);
    }

    return {
      value,
      name,
      itemStyle: {
        color: colorFn(name),
        opacity: isFiltered
          ? OpacityEnum.SemiTransparent
          : OpacityEnum.NonTransparent,
      },
    };
  });

  const series: PieSeriesOption[] = [
    {
      type: 'pie',
      radius: [`${donut ? innerRadius : 0}%`, `${outerRadius}%`],
      center: ['50%', '50%'],
      avoidLabelOverlap: true,
      labelLine: labelsOutside && labelLine ? { show: true } : { show: false },
      label: labelsOutside
        ? {
            ...defaultLabel,
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5,
          }
        : {
            ...defaultLabel,
            position: 'inner',
          },

      data: transformedData,
    },
  ];

  const echartOptions: EChartsCoreOption = {
    tooltip: {
      show: true,
      trigger: 'item',
    },
    series,
  };

  return {
    width,
    height,
    formData,
    echartOptions,
  };
}
