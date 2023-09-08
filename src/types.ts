/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  ChartMetadata,
  ChartPlugin,
  ChartProps,
  PlainObject,
  SqlaFormData,
} from '@superset-ui/core';
import { EChartsCoreOption } from 'echarts';

export interface EchartsProps extends EchartsStylesProps {
  echartOptions: EChartsCoreOption;
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

export type EchartsStylesProps = {
  height: number;
  width: number;
};

export interface BaseChartProps<T extends PlainObject> extends ChartProps<T> {}

export interface BaseTransformedProps<F> extends EchartsStylesProps {
  echartOptions: EChartsCoreOption;
  formData: F;
}
