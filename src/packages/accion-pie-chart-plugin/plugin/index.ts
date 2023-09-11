import { ChartMetadata, t } from '@superset-ui/core';
import { EchartsChartPlugin } from '../../../types';
import thumbnail from '../images/thumbnail.png';
import {
  AccionPieChartPluginFormData,
  AccionPieChartPluginProps,
} from '../types';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';

export default class SupersetPlugins extends EchartsChartPlugin<
  AccionPieChartPluginFormData,
  AccionPieChartPluginProps
> {
  constructor() {
    const metadata = new ChartMetadata({
      description: 'Accion Pie Chart Plugin',
      name: t('Accion Pie Chart Plugin'),
      thumbnail,
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../AccionPieChartPlugin'),
      metadata,
      transformProps,
    });
  }
}
