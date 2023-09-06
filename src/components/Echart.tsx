import { styled } from '@superset-ui/core';
import { default as ReactEcharts } from 'echarts-for-react';
import React from 'react';
import { EchartsProps, EchartsStylesProps } from '../packages/types';

const Styles = styled.div<EchartsStylesProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

function Echart({ width, height, echartOptions }: EchartsProps) {
  return (
    <Styles height={height} width={width}>
      <ReactEcharts style={{ height, width }} option={echartOptions} />
    </Styles>
  );
}

export default Echart;
