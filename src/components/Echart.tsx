import { styled } from '@superset-ui/core';
import { default as ReactEcharts } from 'echarts-for-react';
import React from 'react';
import { EchartsProps, EchartsStylesProps } from '../types';

const Styles = styled.div<EchartsStylesProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

function Echart({ width, height, echartOptions, title }: EchartsProps) {
  const onChartClick = (params: any) => {
    console.log({ type: title, message: params.data });
    window.parent.postMessage({ type: title, message: params.data }, '*');
  };

  const onEvents = {
    click: onChartClick,
  };

  return (
    <Styles height={height} width={width}>
      <ReactEcharts
        style={{ height, width }}
        option={echartOptions}
        onEvents={onEvents}
        opts={{ renderer: 'svg' }}
      />
    </Styles>
  );
}

export default Echart;
