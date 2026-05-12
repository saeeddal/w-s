export enum UkAutoBooleanType {
    AUTO = 'AUTO',
    TRUE = 'TRUE',
    FALSE = 'FALSE',
}
export type AutoBooleanType = `${UkAutoBooleanType}`;

export enum UkBooleanType {
    TRUE = 'TRUE',
    FALSE = 'FALSE',
}
export type BooleanType = `${UkBooleanType}`;

export enum UkCrudMode {
    EDIT = 'EDIT',
    VIEW = 'VIEW',
}
export type CrudMode = `${UkCrudMode}`;

export enum UkSortType {
    ACS = 'ACS',
    DESC = 'DESC',
}
export type SortType = `${UkSortType}`;

export enum UkDeviceMode {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP',
}
export type DeviceMode = `${UkDeviceMode}`;
