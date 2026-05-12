export interface BmnAppSetting {
  // maxAppWidth: number;
  header: BmnBamanHeader;
  appVersion: string;
  callCenter: string;
}

export interface BmnBamanHeader {
  backgroundColor: string;
  headerHeight: number;
}

export interface BmnBamanSortItems {
  id: string;
  title: string;
}
