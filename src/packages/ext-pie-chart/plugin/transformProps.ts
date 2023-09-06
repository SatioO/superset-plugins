import { EChartsCoreOption, PieSeriesOption } from 'echarts';
import { ExtPieChartProps, ExtPieChartTransformedProps } from '../types';

export default function transformProps(
  chartProps: ExtPieChartProps
): ExtPieChartTransformedProps {
  const { width, height, formData } = chartProps;

  const series: PieSeriesOption[] = [];
  const echartOptions: EChartsCoreOption = { series };

  return {
    width,
    height,
    formData,
    echartOptions,
  };
}
