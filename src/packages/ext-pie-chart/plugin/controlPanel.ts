import { ControlPanelConfig, sections } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
// import { DEFAULT_FORM_DATA } from '../types';
// const { showLabels, labelType, labelsOutside, labelLine, donut, innerRadius } =
//   DEFAULT_FORM_DATA;

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [['groupby'], ['metric'], ['adhoc_filters']],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        // ['color_scheme'],
        // ...legendSection,
        // [
        //   {
        //     name: 'label_type',
        //     config: {
        //       type: 'SelectControl',
        //       label: t('Label Type'),
        //       default: labelType,
        //       renderTrigger: true,
        //       choices: [
        //         ['key', t('Category Name')],
        //         ['value', t('Value')],
        //         ['percent', t('Percentage')],
        //         ['key_value', t('Category and Value')],
        //         ['key_percent', t('Category and Percentage')],
        //         ['key_value_percent', t('Category, Value and Percentage')],
        //       ],
        //       description: t('What should be shown on the label?'),
        //     },
        //   },
        // ],
        // [
        //   {
        //     name: 'show_labels',
        //     config: {
        //       type: 'CheckboxControl',
        //       label: t('Show Labels'),
        //       renderTrigger: true,
        //       default: showLabels,
        //       description: t('Whether to display the labels.'),
        //     },
        //   },
        // ],
        // [
        //   {
        //     name: 'labels_outside',
        //     config: {
        //       type: 'CheckboxControl',
        //       label: t('Put labels outside'),
        //       default: labelsOutside,
        //       renderTrigger: true,
        //       description: t('Put the labels outside of the pie?'),
        //       visibility: ({ controls }: ControlPanelsContainerProps) =>
        //         Boolean(controls?.show_labels?.value),
        //     },
        //   },
        // ],
        // [
        //   {
        //     name: 'label_line',
        //     config: {
        //       type: 'CheckboxControl',
        //       label: t('Label Line'),
        //       default: labelLine,
        //       renderTrigger: true,
        //       description: t(
        //         'Draw line from Pie to label when labels outside?'
        //       ),
        //       visibility: ({ controls }: ControlPanelsContainerProps) =>
        //         Boolean(controls?.show_labels?.value),
        //     },
        //   },
        // ],
        // [
        //   {
        //     name: 'donut',
        //     config: {
        //       type: 'CheckboxControl',
        //       label: t('Donut'),
        //       default: donut,
        //       renderTrigger: true,
        //       description: t('Do you want a donut or a pie?'),
        //     },
        //   },
        // ],
        // [
        //   {
        //     name: 'innerRadius',
        //     config: {
        //       type: 'SliderControl',
        //       label: t('Inner Radius'),
        //       renderTrigger: true,
        //       min: 0,
        //       max: 100,
        //       step: 1,
        //       default: innerRadius,
        //       description: t('Inner radius of donut hole'),
        //       visibility: ({ controls }: ControlPanelsContainerProps) =>
        //         Boolean(controls?.donut?.value),
        //     },
        //   },
        // ],
      ],
    },
  ],
};

export default config;
