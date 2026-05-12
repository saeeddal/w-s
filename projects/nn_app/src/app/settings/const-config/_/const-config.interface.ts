import { BmnGateway } from './app-gateway.interface';
import { BmnAppSetting } from './app-setting.interface';
import { BmnConfigImage } from './config-image.interface';
import { BmnRelevantPath } from './relavant-path.interface';

export interface BmnCommonSettings {
  maxMobileWidth: number;
  maxMobileWidthPadded: number;
  maxDesktopWidth: number;
  maxDesktopWidthPadded: number;
}

export interface BmnConstConfig {
  image: BmnConfigImage;
  appSetting: BmnAppSetting;
  common: BmnCommonSettings;
  gateway: BmnGateway;
  relevantPath: BmnRelevantPath;
}
