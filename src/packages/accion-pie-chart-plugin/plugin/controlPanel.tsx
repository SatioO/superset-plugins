import {
  ControlPanelConfig,
  ControlPanelsContainerProps,
  sections,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import React from 'react';
import ControlSubSectionHeader from '../../../components/ControlSubSectionHeader';
import { DEFAULT_PIE_FORM_DATA } from '../constants';

const { title, animation, innerRadius } = DEFAULT_PIE_FORM_DATA;

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
        [<ControlSubSectionHeader>Properties</ControlSubSectionHeader>],
        [
          {
            name: 'title',
            config: {
              type: 'TextControl',
              label: t('Title'),
              renderTrigger: true,
              default: title,
              description: t('Chart title.'),
            },
          },
        ],
        [<ControlSubSectionHeader>Theme</ControlSubSectionHeader>],
        ['color_scheme'],
        [
          {
            name: 'animation',
            config: {
              type: 'CheckboxControl',
              label: t('Animation'),
              renderTrigger: true,
              default: animation,
              description: t('Chart animation.'),
            },
          },
        ],
        [<ControlSubSectionHeader>Donut</ControlSubSectionHeader>],
        [
          {
            name: 'donut',
            config: {
              type: 'CheckboxControl',
              label: t('Donut'),
              renderTrigger: true,
              default: true,
              description: t('Do you like Donut or Pie'),
            },
          },
        ],
        [
          {
            name: 'innerRadius',
            config: {
              type: 'SliderControl',
              label: t('Inner Radius'),
              renderTrigger: true,
              min: 0,
              max: 100,
              step: 1,
              default: innerRadius,
              description: t('Inner radius of donut hole'),
              visibility: ({ controls }: ControlPanelsContainerProps) =>
                Boolean(controls?.donut?.value),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
