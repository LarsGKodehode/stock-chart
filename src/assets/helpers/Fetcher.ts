interface FetcherCreateInfo {
  endpoint: string,
  requestHeader: RequestHeader,
};

interface RequestHeader {

};

class Fetcher {
  constructor(createInfo: FetcherCreateInfo) {
    this.endpoint = createInfo.endpoint;
    this.requestHeader = createInfo.requestHeader;
  };

  endpoint: string;
  requestHeader: RequestHeader;

  
};

export default Fetcher;

export type {
  FetcherCreateInfo,
};