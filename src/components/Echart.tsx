import { styled } from '@superset-ui/core';
import { default as ReactEcharts } from 'echarts-for-react';
import React from 'react';
import { EchartsProps, EchartsStylesProps } from '../types';

const Styles = styled.div<EchartsStylesProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

function Echart({ width, height, echartOptions }: EchartsProps) {
  const onChartClick = (params: any) => {
    window.parent.postMessage(
      { type: 'ext-pie-chart', message: params.data },
      '*'
    );
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
