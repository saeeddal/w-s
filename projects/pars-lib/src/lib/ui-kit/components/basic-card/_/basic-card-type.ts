export enum UkCardBgColor {
  TRANSPARENT = 'TRANSPARENT',
  WHITE = 'WHITE',
  PURPLE = 'PURPLE',
  GRAY = 'GRAY',
  BACKGROUND_PRIMARY_01 = 'BACKGROUND-PRIMARY-01',
  NORMAL = 'NORMAL',
  ACTIVE = 'ACTIVE',
}
export type CardBgColor = `${UkCardBgColor}`;

export enum UkCardBorderColor {
  GRAY = 'GRAY',
  PURPLE = 'PURPLE',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  RED = 'RED',
  TRANSPARENT = 'TRANSPARENT',
}
export type CardBorderColor = `${UkCardBorderColor}`;

export enum UkCardPadding {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  SMALLER = 'SMALLER',
  NONE = 'NONE',
}
export type CardPadding = `${UkCardPadding}`;

export enum UkCardRadius {
  LARGEST = 'LARGEST',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}
export type CardRadius = `${UkCardRadius}`;
