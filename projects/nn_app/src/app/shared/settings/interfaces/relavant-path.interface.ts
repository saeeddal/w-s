export interface IRelevantPath {
  get: {
    getPackage: string;
  };
  post: {
    // << wallet service >>
    transactionList: string;
  };
  put: {
    // << auth service >>
    userProfileUpdate: string;
  };
  delete: {
    // << bmn shop - metro e tickets >>
    shopDeleteCard: string;
  };
}
