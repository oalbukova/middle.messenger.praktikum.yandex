import { queryStringify } from '../utils';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum ContentType {
  json = 'application/json',
  formData = 'multipart/form-data',
}
type TRequestOptions = {
  method: METHODS;
  data?: any;
  type: ContentType;
};

type HTTPMethod = <Response = void>(
  url: string,
  data?: unknown,
  type?: ContentType
) => Promise<Response>;

type TQueryStringifyData = Record<string, string | number>;

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  private request<Response>(
    url: string,
    options: TRequestOptions = { method: METHODS.GET, type: ContentType.json }
  ): Promise<Response> {
    const { method, type, data } = options;

    const reqUrl =
      method === METHODS.GET && data
        ? url + queryStringify(data as TQueryStringifyData)
        : url;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? reqUrl : url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      if (type !== ContentType.formData) {
        xhr.setRequestHeader('Content-Type', type);
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (type === ContentType.json) {
        xhr.send(JSON.stringify(data));
      } else {
        xhr.send(data);
      }
    });
  }

  public get: HTTPMethod = (path = '/', data?, type = ContentType.json) =>
    this.request(this.endpoint + path, { type, data, method: METHODS.GET });

  public post: HTTPMethod = (path, data?, type = ContentType.json) =>
    this.request(this.endpoint + path, { type, data, method: METHODS.POST });

  public put: HTTPMethod = (path, data, type = ContentType.json) =>
    this.request(this.endpoint + path, { type, data, method: METHODS.PUT });

  public patch: HTTPMethod = (path, data, type = ContentType.json) =>
    this.request(this.endpoint + path, { type, data, method: METHODS.PATCH });

  public delete: HTTPMethod = (path, data?, type = ContentType.json) =>
    this.request(this.endpoint + path, { type, data, method: METHODS.DELETE });
}
