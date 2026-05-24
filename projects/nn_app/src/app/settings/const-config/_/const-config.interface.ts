import type { IGateway } from './app-gateway.interface';
import type { IAppSetting } from './app-setting.interface';
import type { IConfigImage } from './config-image.interface';
import type { IRelevantPath } from './relevant-path.interface';

export interface ICommonSettings {
  maxMobileWidth: number;
  maxMobileWidthPadded: number;
  maxDesktopWidth: number;
  maxDesktopWidthPadded: number;
}

export interface IConstConfig {
  image: IConfigImage;
  appSetting: IAppSetting;
  common: ICommonSettings;
  gateway: IGateway;
  relevantPath: IRelevantPath;
}
