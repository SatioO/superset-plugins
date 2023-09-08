import {
  ChartDataResponseResult,
  DataRecord,
  DataRecordValue,
  GenericDataType,
  NumberFormats,
  NumberFormatter,
  TimeFormatter,
  ensureIsArray,
  getNumberFormatter,
} from '@superset-ui/core';
import { format } from 'echarts';
import { NULL_STRING } from '../constants';
// import { LegendOrientation, LegendState, LegendType } from '../types';

export const TS_REGEX = /(\d{4}-\d{2}-\d{2})[\sT](\d{2}:\d{2}:\d{2}\.?\d*).*/;

export default function normalizeTimestamp(value: string): string {
  const match = value.match(TS_REGEX);
  if (match) {
    return `${match[1]}T${match[2]}Z`;
  }
  return value;
}

export function sanitizeHtml(text: string): string {
  return format.encodeHTML(text);
}

export const percentFormatter = getNumberFormatter(
  NumberFormats.PERCENT_2_POINT
);

// export function getLegendProps(
//   type: LegendType,
//   orientation: LegendOrientation,
//   show: boolean,
//   theme: SupersetTheme,
//   zoomable = false,
//   legendState?: LegendState
// ): LegendComponentOption | LegendComponentOption[] {
//   const legend: LegendComponentOption | LegendComponentOption[] = {
//     orient: [LegendOrientation.Top, LegendOrientation.Bottom].includes(
//       orientation
//     )
//       ? 'horizontal'
//       : 'vertical',
//     show,
//     type,
//     selected: legendState,
//     selector: ['all', 'inverse'],
//     selectorLabel: {
//       fontFamily: theme.typography.families.sansSerif,
//       fontSize: theme.typography.sizes.s,
//       color: theme.colors.grayscale.base,
//       borderColor: theme.colors.grayscale.base,
//     },
//   };
//   switch (orientation) {
//     case LegendOrientation.Left:
//       legend.left = 0;
//       break;
//     case LegendOrientation.Right:
//       legend.right = 0;
//       legend.top = zoomable ? TIMESERIES_CONSTANTS.legendRightTopOffset : 0;
//       break;
//     case LegendOrientation.Bottom:
//       legend.bottom = 0;
//       break;
//     case LegendOrientation.Top:
//     default:
//       legend.top = 0;
//       legend.right = zoomable ? TIMESERIES_CONSTANTS.legendTopRightOffset : 0;
//       break;
//   }
//   return legend;
// }

export const getColtypesMapping = ({
  coltypes = [],
  colnames = [],
}: Pick<ChartDataResponseResult, 'coltypes' | 'colnames'>): Record<
  string,
  GenericDataType
> => {
  return colnames.reduce(
    (accumulator, item, index) => ({
      ...accumulator,
      [item]: coltypes[index],
    }),
    {}
  );
};

export function formatSeriesName(
  name: DataRecordValue | undefined,
  {
    numberFormatter,
    timeFormatter,
    coltype,
  }: {
    numberFormatter?: NumberFormatter;
    timeFormatter?: TimeFormatter;
    coltype?: GenericDataType;
  } = {}
): string {
  if (name === undefined || name === null) {
    return NULL_STRING;
  }
  if (typeof name === 'boolean') {
    return name.toString();
  }
  if (name instanceof Date || coltype === GenericDataType.TEMPORAL) {
    const normalizedName =
      typeof name === 'string' ? normalizeTimestamp(name) : name;
    const d =
      normalizedName instanceof Date
        ? normalizedName
        : new Date(normalizedName);

    return timeFormatter ? timeFormatter(d) : d.toISOString();
  }
  if (typeof name === 'number') {
    return numberFormatter ? numberFormatter(name) : name.toString();
  }
  return name;
}

export function extractGroupbyLabel({
  datum = {},
  groupby,
  numberFormatter,
  timeFormatter,
  coltypeMapping = {},
}: {
  datum?: DataRecord;
  groupby?: string[] | null;
  numberFormatter?: NumberFormatter;
  timeFormatter?: TimeFormatter;
  coltypeMapping?: Record<string, GenericDataType>;
}): string {
  return ensureIsArray(groupby)
    .map((val) => {
      return formatSeriesName(datum[val], {
        numberFormatter,
        timeFormatter,
        ...(coltypeMapping[val] && { coltype: coltypeMapping[val] }),
      });
    })
    .join(', ');
}
