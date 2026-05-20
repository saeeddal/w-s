export interface BmnImageInfo {
  width: number;
  height: number;
  averageColor: string;
  path: string;
  extension: string;
  mimeType: string;
}

export interface BmnLocation {
  latitude: number;
  longitude: number;
}

export enum BmnPermission {
  POST_NOTIFICATIONS = 'POST_NOTIFICATIONS',
  ACCESS_FINE_LOCATION = 'ACCESS_FINE_LOCATION',
  WRITE_EXTERNAL_STORAGE = 'WRITE_EXTERNAL_STORAGE',
  CAMERA = 'CAMERA',
}

export interface BmnKeyValue {
  key: string;
  value: string;
}

export interface BmnKeyTitle {
  key: number;
  title: string;
}

export interface IdTitle {
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
