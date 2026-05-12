import {
  UkCardBgColor,
  UkCardBorderColor,
  UkCardPadding,
  UkCardRadius,
} from './ui-kit/components/basic-card/_/basic-card-type';
import { UkIconColor } from './ui-kit/components/icon/_/icon-color';
import { UkIconSize } from './ui-kit/components/icon/_/icon-size';
import {
  UkImageBgColor,
  UkImageObjectFit,
  UkImagePadding,
} from './ui-kit/components/image/_/image.type';
import {
  UkLabelBgColor,
  UkLabelFgColor,
  UkLabelHorizontalAlignment,
  UkLabelNumeric,
  UkLabelSize,
  UkLabelTextWrap,
  UkLabelType,
  UkLabelWeight,
  UkLineHeight,
} from './ui-kit/components/label/_/label.type';

export const UK_TYPE = {
  IMAGE: {
    BG_COLOR: UkImageBgColor,
    OBJECT_FIT: UkImageObjectFit,
    iMAGE_PADDING: UkImagePadding,
  },
  ICON: {
    COLOR: UkIconColor,
    SIZE: UkIconSize,
  },
  // CARD
  CARD: {
    BG_COLOR: UkCardBgColor,
    BORDER_COLOR: UkCardBorderColor,
    PADDING: UkCardPadding,
    RADIUS: UkCardRadius,
  },
  // label
  LABEL: {
    FG_COLOR: UkLabelFgColor,
    TYPE: UkLabelType,
    SIZE: UkLabelSize,
    WEIGHT: UkLabelWeight,
    NUMERIC: UkLabelNumeric,
    Line_height: UkLineHeight,
    horizontalAlignment: UkLabelHorizontalAlignment,
    TEXT_WRAP: UkLabelTextWrap,
    BG_COLOR: UkLabelBgColor,
  },
};
