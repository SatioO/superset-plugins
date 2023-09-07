import { ChartProps } from '@superset-ui/core';
// import { ExtPieChartLabelType, ExtPieChartProps } from '../types';

export default function transformProps(chartProps: ChartProps) {
  // const { height, width, headerText } = chartProps;
  // const { data = [] } = queriesData[0];
  // const {
  //   colorScheme,
  //   donut,
  //   groupby,
  //   innerRadius,
  //   labelsOutside,
  //   labelLine,
  //   metric = '',
  //   dateFormat,
  //   outerRadius,
  //   showLabels,
  //   labelType,
  //   legendType,
  //   legendOrientation,
  //   showLegend,
  // } = {
  //   ...DEFAULT_LEGEND_FORM_DATA,
  //   ...DEFAULT_FORM_DATA,
  //   ...formData,
  // };
  // const metricLabel = getMetricLabel(metric);
  // const groupbyLabels = groupby.map(getColumnLabel);
  // const coltypeMapping = getColtypesMapping(queriesData[0]);
  // const keys = data.map((datum) =>
  //   extractGroupbyLabel({
  //     datum,
  //     groupby: groupbyLabels,
  //     coltypeMapping,
  //     timeFormatter: getTimeFormatter(dateFormat),
  //   })
  // );
  // const formatter = (params: CallbackDataParams) =>
  //   formatPieLabel({
  //     params,
  //     labelType,
  //   });
  // const defaultLabel = {
  //   formatter,
  //   show: showLabels,
  //   // color: theme.colors.grayscale.dark2,
  // };
  // const colorFn = CategoricalColorNamespace.getScale(colorScheme as string);
  // const transformedData: PieSeriesOption[] = data.map((datum) => {
  //   const name = extractGroupbyLabel({
  //     datum,
  //     groupby: groupbyLabels,
  //     coltypeMapping,
  //     timeFormatter: getTimeFormatter(dateFormat),
  //   });
  //   const value = datum[metricLabel];
  //   return {
  //     value,
  //     name,
  //     itemStyle: {
  //       color: colorFn(name),
  //       opacity: OpacityEnum.NonTransparent,
  //     },
  //   };
  // });
  // const series: PieSeriesOption[] = [
  //   {
  //     type: 'pie',
  //     radius: [`${donut ? innerRadius : 0}%`, `${outerRadius}%`],
  //     center: ['50%', '50%'],
  //     avoidLabelOverlap: true,
  //     labelLine: labelsOutside && labelLine ? { show: true } : { show: false },
  //     label: labelsOutside
  //       ? {
  //           ...defaultLabel,
  //           position: 'outer',
  //           alignTo: 'none',
  //           bleedMargin: 5,
  //         }
  //       : {
  //           ...defaultLabel,
  //           position: 'inner',
  //         },
  //     data: transformedData,
  //   },
  // ];
  // const echartOptions: EChartsCoreOption = {
  //   grid: {
  //     containLabel: true,
  //   },
  //   legend: {
  //     // ...getLegendProps(legendType, legendOrientation, showLegend, theme),
  //     data: keys,
  //   },
  //   tooltip: {
  //     show: true,
  //     trigger: 'item',
  //   },
  //   series,
  // };
  // return {
  //   width,
  //   height,
  //   formData,
  //   echartOptions,
  // };

  const { width, height, formData } = chartProps;
  const { headerText } = formData;

  return {
    width,
    height,
    // and now your control data, manipulated as needed, and passed through as props!
    headerText,
  };
}

// export function formatPieLabel({
//   params,
//   labelType,
//   sanitizeName = false,
// }: {
//   params: Pick<CallbackDataParams, 'name' | 'value' | 'percent'>;
//   labelType: ExtPieChartLabelType;
//   sanitizeName?: boolean;
// }): string {
//   const { name: rawName = '', value } = params;
//   const name = sanitizeName ? sanitizeHtml(rawName) : rawName;

//   switch (labelType) {
//     case ExtPieChartLabelType.Key:
//       return name;
//     case ExtPieChartLabelType.Value:
//       return value.toString();
//     case ExtPieChartLabelType.Percent:
//       return value.toString();
//     case ExtPieChartLabelType.KeyValue:
//       return `${name}: ${value}`;
//     case ExtPieChartLabelType.KeyValuePercent:
//       return `${name}: ${value} (${value.toString()})`;
//     case ExtPieChartLabelType.KeyPercent:
//       return `${name}: ${value.toString()}`;
//     default:
//       return name;
//   }
// }
