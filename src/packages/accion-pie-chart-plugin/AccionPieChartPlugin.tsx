import React from 'react';
import Echart from '../../components/Echart';
import { AccionPieChartPluginTransformProps } from './types';

export default function AccionPieChartPlugin(
  props: AccionPieChartPluginTransformProps
) {
  const { height, width, echartOptions, theme, title } = props;

  return (
    <Echart
      height={height}
      width={width}
      echartOptions={echartOptions}
      theme={theme}
      title={title}
    />
  );
}
