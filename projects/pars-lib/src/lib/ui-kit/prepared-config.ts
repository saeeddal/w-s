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
} from './components/button/_/button.type';
import {
  PtDividerBgColor,
  PtDividerDisplay,
  PtDividerMargin,
  PtDividerSize,
} from './components/divider/_/divider.type';
import { UkIconColor } from './components/icon/_/icon-color';
import { UkIconName } from './components/icon/_/icon-name';
import { UkIconSize } from './components/icon/_/icon-size';
import { PtInputBorderColor, PtInputNumeric, PtInputType } from './components/input/_/input.type';
import {
  UkLabelBgColor,
  UkLabelBorderRadius,
  UkLabelDisplay,
  UkLabelFgColor,
  UkLabelHorizontalAlignment,
  UkLabelNumeric,
  UkLabelPadding,
  UkLabelSize,
  UkLabelTextWrap,
  UkLabelType,
  UkLabelTypography,
  UkLabelVerticalAlignment,
  UkLabelWeight,
} from './components/label/_/label.type';

import { UkCrudMode } from './definitions/uk.type';

const SIMPLE = {
  image: {
    source: 'assets/pars-lib/images/empty/no-image.jpg',
  },
  icon: {
    color: UkIconColor.GRAY_MEDIUM,
    name: UkIconName.MANEX,
    size: UkIconSize.MEDIUM,
  },
  button: {
    bgColor: UkButtonBgColor.BUTTON_PRIMARY,
    display: UkButtonDisplay.INLINE,
    style: UkButtonStyle.NONE,
    borderColor: UkButtonBorderColor.TRANSPARENT,
    padding: UkButtonPadding.NORMAL,
    type: UkButtonType.BUTTON,
    cursor: UkButtonCursor.NORMAL,
    ukType: UkButtonUkType.NONE,
    height: UkButtonHeight.H_48,
  },
  label: {
    horizontalAlignment: UkLabelHorizontalAlignment.START,
    verticalAlignment: UkLabelVerticalAlignment.CENTER,
    bgColor: UkLabelBgColor.TRANSPARENT,
    fgColor: UkLabelFgColor.TEXT_NORMAL,
    typography: UkLabelTypography.BUTTON_1,
    type: UkLabelType.NONE,
    display: UkLabelDisplay.INLINE_FLEX,
    padding: UkLabelPadding.NONE,
    borderRadius: UkLabelBorderRadius.NONE,
    numeric: UkLabelNumeric.DEFAULT,
    textWrap: UkLabelTextWrap.UN_SET,
    size: UkLabelSize.SMALLER,
    weight: UkLabelWeight.NORMAL,
  },

  input: {
    type: PtInputType.TEXT,
    borderColor: PtInputBorderColor.GRADE_2,
    numeric: PtInputNumeric.DEFAULT,
    crudMode: UkCrudMode.EDIT,
  },
  divider: {
    bgColor: PtDividerBgColor.GRADE_2,
    size: PtDividerSize.PX_1,
    margin: PtDividerMargin.NONE,
    display: PtDividerDisplay.HORIZONTAL,
  },
};

// const ANOTHER_CONFIG = {
// };

const DEFAULT = SIMPLE;

export default DEFAULT;
