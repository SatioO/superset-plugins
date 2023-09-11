import { QueryFormData, SupersetTheme } from '@superset-ui/core';
import { BaseChartProps, BaseTransformedProps } from '../../types';

export type AccionPieChartPluginFormData = QueryFormData & {
  title: string;

  // Chart Properties
  animation: boolean;
  colorScheme?: string;

  // Donut Properties
  donut: boolean;
  innerRadius: number;
  outerRadius: number;
};

export type AccionPieChartPluginTransformProps =
  BaseTransformedProps<AccionPieChartPluginFormData> & {
    theme: SupersetTheme;
    title: string;
  };

export type AccionPieChartPluginProps =
  BaseChartProps<AccionPieChartPluginFormData> &
    AccionPieChartPluginTransformProps;
