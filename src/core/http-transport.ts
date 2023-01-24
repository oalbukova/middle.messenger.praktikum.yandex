import { queryStringify } from '../utils';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type TRequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  data?: unknown;
  timeout?: number;
};

type TQueryStringifyData = Record<string, string | number>;
type HTTPMethod  = <Response>(url: string, options?: TRequestOptions) => Promise<Response >;

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  private request<Response>(
    url: string,
    options: TRequestOptions
  ): Promise<Response> {
    const { method, data, headers = {}, timeout = 5000 } = options;

    const reqUrl =
      method === METHODS.GET && data
        ? url + queryStringify(data as TQueryStringifyData)
        : url;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method!, reqUrl);
      xhr.timeout = timeout;

      Object.entries(headers).forEach(([key, value]) =>
        xhr.setRequestHeader(key, value)
      );

      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }

  get: HTTPMethod = (url: string, options: TRequestOptions = {}) => {
    url = options.data ? url + queryStringify(options.data) : url;
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.GET,
    });
  };

  post: HTTPMethod = (url: string, options: TRequestOptions = {}) => {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.POST,
    });
  };

  put: HTTPMethod = (url: string, options: TRequestOptions = {}) => {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.PUT,
    });
  };

  delete: HTTPMethod = (url: string, options: TRequestOptions = {}) => {
    return this.request(this.endpoint + url, {
      ...options,
      method: METHODS.DELETE,
    });
  };
}
