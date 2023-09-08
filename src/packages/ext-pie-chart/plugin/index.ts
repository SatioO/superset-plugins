import { ChartMetadata, t } from '@superset-ui/core';
import { EchartsChartPlugin } from '../../../types';
import thumbnail from '../images/thumbnail.png';
import { ExtPieChartFormData, ExtPieChartProps } from '../types';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';

export default class SupersetPlugins extends EchartsChartPlugin<
  ExtPieChartFormData,
  ExtPieChartProps
> {
  constructor() {
    const metadata = new ChartMetadata({
      description: 'Ext Pie Chart',
      name: t('Ext Pie Chart'),
      thumbnail,
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../ExtPieChart'),
      metadata,
      transformProps,
    });
  }
}
