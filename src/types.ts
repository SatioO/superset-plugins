import {
  ChartDataResponseResult,
  ChartMetadata,
  ChartPlugin,
  ChartProps,
  PlainObject,
  SqlaFormData,
  SupersetTheme,
} from '@superset-ui/core';
import { EChartsCoreOption } from 'echarts';

export type EchartsStylesProps = {
  height: number;
  width: number;
};

export interface EchartsProps extends EchartsStylesProps {
  echartOptions: EChartsCoreOption;
  theme: SupersetTheme;
  title: string;
}

export class EchartsChartPlugin<
  T extends SqlaFormData = SqlaFormData,
  P extends ChartProps = ChartProps
> extends ChartPlugin<T, P> {
  constructor(props: any) {
    const { metadata, ...restProps } = props;
    super({
      ...restProps,
      metadata: new ChartMetadata({
        parseMethod: 'json',
        ...metadata,
      }),
    });
  }
}

export interface BaseChartProps<T extends PlainObject> extends ChartProps<T> {
  queriesData: ChartDataResponseResult[];
}

export interface BaseTransformedProps<F> extends EchartsStylesProps {
  echartOptions: EChartsCoreOption;
  formData: F;
}
