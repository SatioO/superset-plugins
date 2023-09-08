import { QueryFormData } from '@superset-ui/core';
import { BaseChartProps, BaseTransformedProps } from '../../types';

export type ExtPieChartFormData = QueryFormData & {
  headerText: string;
};

export type ExtPieTransformProps = BaseTransformedProps<ExtPieChartFormData>;

export type ExtPieChartProps = BaseChartProps<ExtPieChartFormData> &
  ExtPieTransformProps;
