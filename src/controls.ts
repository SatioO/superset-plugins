import {
  ControlPanelsContainerProps,
  ControlSetItem,
  ControlSetRow,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { DEFAULT_LEGEND_FORM_DATA } from './constants';

const { legendMargin, legendOrientation, legendType, showLegend } =
  DEFAULT_LEGEND_FORM_DATA;

const showLegendControl: ControlSetItem = {
  name: 'show_legend',
  config: {
    type: 'CheckboxControl',
    label: t('Show legend'),
    renderTrigger: true,
    default: showLegend,
    description: t('Whether to display a legend for the chart'),
  },
};

const legendTypeControl: ControlSetItem = {
  name: 'legendType',
  config: {
    type: 'SelectControl',
    freeForm: false,
    label: t('Type'),
    choices: [
      ['scroll', t('Scroll')],
      ['plain', t('Plain')],
    ],
    default: legendType,
    renderTrigger: true,
    description: t('Legend type'),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.show_legend?.value),
  },
};

const legendOrientationControl: ControlSetItem = {
  name: 'legendOrientation',
  config: {
    type: 'SelectControl',
    freeForm: false,
    label: t('Orientation'),
    choices: [
      ['top', t('Top')],
      ['bottom', t('Bottom')],
      ['left', t('Left')],
      ['right', t('Right')],
    ],
    default: legendOrientation,
    renderTrigger: true,
    description: t('Legend Orientation'),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.show_legend?.value),
  },
};

const legendMarginControl: ControlSetItem = {
  name: 'legendMargin',
  config: {
    type: 'TextControl',
    label: t('Margin'),
    renderTrigger: true,
    isInt: true,
    default: legendMargin,
    description: t('Additional padding for legend.'),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.show_legend?.value),
  },
};

export const legendSection: ControlSetRow[] = [
  [showLegendControl],
  [legendTypeControl],
  [legendOrientationControl],
  [legendMarginControl],
];
