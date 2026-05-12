export enum UkButtonUkType {
    NONE = 'NONE',
    OUTLINE_BLUE = 'OUTLINE-BLUE',
}
export type ButtonUkType = `${UkButtonUkType}`;

export enum UkButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
}
export type ButtonType = `${UkButtonType}`;

export enum UkButtonStyle {
    NONE = 'NONE',
    OUTLINE = 'OUTLINE',
}
export type ButtonStyle = `${UkButtonStyle}`;

export enum UkButtonPadding {
    NORMAL = 'NORMAL',
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
}
export type ButtonPadding = `${UkButtonPadding}`;

export enum UkButtonHeight {
    H_48 = 'H-48',
    H_40 = 'H-40',
    H_36 = 'H-36',
    H_32 = 'H-32',
}
export type ButtonHeight = `${UkButtonHeight}`;

export enum UkButtonDisplay {
    INLINE = 'INLINE',
    BLOCK = 'BLOCK',
}
export type ButtonDisplay = `${UkButtonDisplay}`;

export enum UkButtonCursor {
    NORMAL = 'NORMAL',
    POINTER = 'POINTER',
}
export type ButtonCursor = `${UkButtonCursor}`;

export enum UkButtonBorderColor {
    TRANSPARENT = 'TRANSPARENT',
    COLOR_BORDER_GRADE_0 = 'COLOR-BORDER-GRADE-0',
    COLOR_BUTTON_OUTLINE = 'COLOR-BUTTON-OUTLINE',
    COLOR_BUTTON_ERROR_FILL = 'COLOR-BUTTON-ERROR-FILL',
    COLOR_BUTTON_PRIMARY = 'COLOR-BUTTON-PRIMARY',
    COLOR_BUTTON_SECONDARY = 'COLOR-BUTTON-SECONDARY',
    COLOR_BUTTON_BORDER_GRAY_MEDIUM = 'COLOR-BUTTON-BORDER-GRAY-MEDIUM',
    RED = 'RED',
    WHITE = 'WHITE',
}
export type ButtonBorderColor = `${UkButtonBorderColor}`;

export enum UkButtonBgColor {
    TRANSPARENT = 'TRANSPARENT',
    BUTTON_PRIMARY = 'BUTTON-PRIMARY',
    CONTENT_SECONDARY = 'CONTENT-SECONDARY',
    ERROR_FILL = 'ERROR-FILL',
    BUTTON_SECONDARY = 'BUTTON-SECONDARY',
    PURPLE = 'PURPLE',
    BUTTON_DISABLED = 'BUTTON-DISABLED',
    DARK_BLUE = 'DARK-BLUE',
    RED = 'RED',
}
export type ButtonBgColor = `${UkButtonBgColor}`;
