export enum UkLabelBgColor {
  TRANSPARENT = 'TRANSPARENT',
}
export type LabelBgColor = `${UkLabelBgColor}`;

export enum UkLabelBorderRadius {
  NONE = 'NONE',
}
export type LabelBorderRadius = `${UkLabelBorderRadius}`;

export enum UkLabelDisplay {
  BLOCK = 'BLOCK',
  INLINE = 'INLINE',
  FLEX = 'FLEX',
  INLINE_BLOCK = 'INLINE-BLOCK',
  INLINE_FLEX = 'INLINE-FLEX',
}
export type LabelDisplay = `${UkLabelDisplay}`;

export enum UkLabelFgColor {
  BASE_TONAL = 'BASE-TONAL',
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}
export type LabelFgColor = `${UkLabelFgColor}`;

export enum UkLabelHorizontalAlignment {
  START = 'START',
  CENTER = 'CENTER',
  END = 'END',
  JUSTIFY = 'JUSTIFY',
}
export type LabelHorizontalAlignment = `${UkLabelHorizontalAlignment}`;

export enum UkLabelNumeric {
  DEFAULT = 'DEFAULT',
  PERSIAN = 'PERSIAN',
}
export type LabelNumeric = `${UkLabelNumeric}`;

export enum UkLabelPadding {
  NONE = 'NONE',
  P4 = 'P4',
}
export type LabelPadding = `${UkLabelPadding}`;

export enum UkLabelTextWrap {
  UN_SET = 'UN-SET',
  NO_WRAP = 'NO-WRAP',
}
export type LabelTextWrap = `${UkLabelTextWrap}`;

export enum UkLabelType {
  NONE = 'NONE',
  BAMAN_PLUS_MEDIUM = 'BAMAN-PLUS-MEDIUM',
}
export type LabelType = `${UkLabelType}`;

export enum UkLabelTypography {
  H_1 = 'H-1',
  H_4 = 'H-4',
  H_5 = 'H-5',
  SUBTITLE_STRONG = 'SUBTITLE-STRONG',
  BODY_1 = 'BODY-1',
  BODY_2 = 'BODY-2',
  BODY_2_STRONG = 'BODY-2-STRONG',
  BUTTON_1 = 'BUTTON-1',
  BUTTON_2 = 'BUTTON-2',
  CAPTION_STRONG = 'CAPTION-STRONG',
  SUBTITLE = 'SUBTITLE',
  CAPTION = 'CAPTION',
}
export type LabelTypography = `${UkLabelTypography}`;

export enum UkLabelVerticalAlignment {
  TOP = 'TOP',
  CENTER = 'CENTER',
  BOTTOM = 'BOTTOM',
}
export type LabelVerticalAlignment = `${UkLabelVerticalAlignment}`;

export enum UkLabelSize {
  // 24-20-18-16-14-12-10
  LARGEST = 'LARGEST',
  LARGER = 'LARGER',
  // LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  SMALLER = 'SMALLER',
  SMALLEST = 'SMALLEST',
}

export type LabelSize = `${UkLabelSize}`;

export enum UkLabelWeight {
  BOLD = 'BOLD',
  NORMAL = 'NORMAL',
  // LIGHT = 'LIGHT',
}

export type LabelWeight = `${UkLabelWeight}`;

export enum UkLineHeight {
  NORMAL = 'NORMAL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export type LineHeight = `${UkLineHeight}`;
