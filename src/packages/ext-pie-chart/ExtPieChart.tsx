import React from 'react';
import Echart from '../../components/Echart';
import { ExtPieChartTransformedProps } from './types';

export default function ExtPieChart(props: ExtPieChartTransformedProps) {
  const { height, width, echartOptions } = props;

  return <Echart height={height} width={width} echartOptions={echartOptions} />;
}
