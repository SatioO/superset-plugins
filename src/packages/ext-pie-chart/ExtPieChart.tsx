import React from 'react';
import Echart from '../../components/Echart';
import { ExtPieTransformProps } from './types';

export default function ExtPieChart(props: ExtPieTransformProps) {
  const { height, width, echartOptions, theme } = props;

  return (
    <Echart
      height={height}
      width={width}
      echartOptions={echartOptions}
      theme={theme}
    />
  );
}
