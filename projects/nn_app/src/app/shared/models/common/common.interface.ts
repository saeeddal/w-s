export interface IImageInfo {
  width: number;
  height: number;
  averageColor: string;
  path: string;
  extension: string;
  mimeType: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export enum IPermission {
  POST_NOTIFICATIONS = 'POST_NOTIFICATIONS',
  ACCESS_FINE_LOCATION = 'ACCESS_FINE_LOCATION',
  WRITE_EXTERNAL_STORAGE = 'WRITE_EXTERNAL_STORAGE',
  CAMERA = 'CAMERA',
}

export interface IBmnKeyValue {
  key: string;
  value: string;
}

export interface IKeyTitle {
  key: number;
  title: string;
}

export interface IIdTitle {
  id: number;
  title: string;
}

export enum BmnAlertPosition {
  TOAST_TOP_RIGHT = 'toast-top-right',
  TOAST_TOP_CENTER = 'toast-top-center',
  TOAST_BOTTOM_CENTER = 'toast-bottom-center',
  TOAST_BOTTOM_CENTER_FULL_WIDTH = 'toast-bottom-full-width',
  TOAST_TOP_CENTER_FULL_WIDTH = 'toast-top-full-width',
}
