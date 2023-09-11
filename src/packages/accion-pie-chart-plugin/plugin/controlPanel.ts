import { ControlPanelConfig, sections } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

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
      controlSetRows: [],
    },
  ],
};

export default config;
