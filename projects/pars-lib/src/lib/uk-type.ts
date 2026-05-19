import {
  UkCardBgColor,
  UkCardBorderColor,
  UkCardPadding,
  UkCardRadius,
} from './ui-kit/components/basic-card/_/basic-card-type';
import {
  UkButtonBgColor,
  UkButtonBorderColor,
  UkButtonCursor,
  UkButtonDisplay,
  UkButtonHeight,
  UkButtonPadding,
  UkButtonStyle,
  UkButtonType,
  UkButtonUkType,
} from './ui-kit/components/button/_/button.type';
import { UkIconColor } from './ui-kit/components/icon/_/icon-color';
import { UkIconSize } from './ui-kit/components/icon/_/icon-size';
import {
  UkImageBgColor,
  UkImageObjectFit,
  UkImagePadding,
} from './ui-kit/components/image/_/image.type';
import {
  PtInputBorderColor,
  PtInputNumeric,
  PtInputType,
} from './ui-kit/components/input/_/input.type';
import {
  UkLabelBgColor,
  UkLabelFgColor,
  UkLabelHorizontalAlignment,
  UkLabelNumeric,
  UkLabelPadding,
  UkLabelSize,
  UkLabelTextWrap,
  UkLabelType,
  UkLabelTypography,
  UkLabelWeight,
  UkLineHeight,
} from './ui-kit/components/label/_/label.type';
import { UkSelectBorderColor } from './ui-kit/components/select/_/select.type';
import { UkBooleanType } from './ui-kit/definitions/uk.type';

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
    padding: UkLabelPadding,
  },
  BUTTON: {
    bgColor: UkButtonBgColor,
    display: UkButtonDisplay,
    style: UkButtonStyle,
    borderColor: UkButtonBorderColor,
    padding: UkButtonPadding,
    type: UkButtonType,
    cursor: UkButtonCursor,
    ukType: UkButtonUkType,
    height: UkButtonHeight,
    // label
    typography: UkLabelTypography,
    fgColor: UkLabelFgColor,
    horizontalAlignment: UkLabelHorizontalAlignment,
  },
  SELECT: {
    borderColor: UkSelectBorderColor,
  },
  BOOLEAN_TYPE: UkBooleanType,
  INPUT: {
    TYPE: PtInputType,
    BORDER_COLOR: PtInputBorderColor,
    NUMERIC: PtInputNumeric,
  },
};
