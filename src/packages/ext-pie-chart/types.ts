import { QueryFormData, SupersetTheme } from '@superset-ui/core';
import { BaseChartProps, BaseTransformedProps } from '../../types';

export type ExtPieChartFormData = QueryFormData & {
  title: string;

  // Chart Properties
  animation: boolean;
  colorScheme?: string;

  // Donut Properties
  donut: boolean;
  innerRadius: number;
  outerRadius: number;
};

export type ExtPieTransformProps = BaseTransformedProps<ExtPieChartFormData> & {
  theme: SupersetTheme;
};

export type ExtPieChartProps = BaseChartProps<ExtPieChartFormData> &
  ExtPieTransformProps;
