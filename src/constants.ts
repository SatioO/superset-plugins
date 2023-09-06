import { LegendFormData, LegendOrientation, LegendType } from './types';
export const NULL_STRING = '<NULL>';
export const TIMESERIES_CONSTANTS = {
  gridOffsetRight: 20,
  gridOffsetLeft: 20,
  gridOffsetTop: 20,
  gridOffsetBottom: 20,
  gridOffsetBottomZoomable: 80,
  legendRightTopOffset: 30,
  legendTopRightOffset: 55,
  zoomBottom: 30,
  toolboxTop: 0,
  toolboxRight: 5,
  dataZoomStart: 0,
  dataZoomEnd: 100,
  yAxisLabelTopOffset: 20,
  extraControlsOffset: 22,
};
export const DEFAULT_LEGEND_FORM_DATA: LegendFormData = {
  legendMargin: null,
  legendOrientation: LegendOrientation.Top,
  legendType: LegendType.Scroll,
  showLegend: true,
};

export enum OpacityEnum {
  Transparent = 0,
  SemiTransparent = 0.3,
  NonTransparent = 1,
}
