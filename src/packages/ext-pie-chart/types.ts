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
import { QueryFormData } from '@superset-ui/core';

export interface ExtPieChartStyleProps {
  height: number;
  width: number;
}

interface ExtPieChartCustomizeProps {
  headerText: string;
}

export type ExtPieChartQueryFormData = QueryFormData &
  ExtPieChartStyleProps &
  ExtPieChartCustomizeProps;

export type ExtPieChartProps = ExtPieChartStyleProps &
  ExtPieChartCustomizeProps & {
    // add typing here for the props you pass in from transformProps.ts!
  };

// export type ExtPieChartFormData = QueryFormData &
//   LegendFormData & {
//     colorScheme?: string;
//     currentOwnValue?: string[] | null;
//     donut: boolean;
//     defaultValue?: string[] | null;
//     groupby: QueryFormColumn[];
//     innerRadius: number;
//     labelLine: boolean;
//     labelType: ExtPieChartLabelType;
//     labelsOutside: boolean;
//     metric?: string;
//     outerRadius: number;
//     showLabels: boolean;
//     numberFormat: string;
//     dateFormat: string;
//     showLabelsThreshold: number;
//   };

// export enum ExtPieChartLabelType {
//   Key = 'key',
//   Value = 'value',
//   Percent = 'percent',
//   KeyValue = 'key_value',
//   KeyPercent = 'key_percent',
//   KeyValuePercent = 'key_value_percent',
// }

// export const DEFAULT_FORM_DATA: ExtPieChartFormData = {
//   ...DEFAULT_LEGEND_FORM_DATA,
//   donut: false,
//   groupby: [],
//   innerRadius: 30,
//   labelLine: false,
//   labelType: ExtPieChartLabelType.Key,
//   legendOrientation: LegendOrientation.Top,
//   legendType: LegendType.Scroll,
//   numberFormat: 'SMART_NUMBER',
//   outerRadius: 70,
//   showLabels: true,
//   labelsOutside: true,
//   showLabelsThreshold: 5,
//   dateFormat: 'smart_date',
//   datasource: '',
//   viz_type: '',
// };

// export type ExtPieChartTransformedProps =
//   BaseTransformedProps<ExtPieChartFormData>;
