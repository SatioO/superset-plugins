import React from 'react';
import Echart from '../../components/Echart';
import { ExtPieChartProps } from './types';

export default function ExtPieChart(props: ExtPieChartProps) {
  const { height, width } = props;

  return <Echart height={height} width={width} echartOptions={{}} />;
}
