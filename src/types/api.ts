export enum Method {
  Post = "POST",
  Delete = "DELETE",
  Patch = "PATCH",
  Put = "PUT",
  Get = "GET",
}

export interface ClientResponseOK<T> {
  status: true;
  results: T;
  count?: number;
}
export interface ClientResponseError {
  status: false;
  message: string;
}
export type ClientResponse<T> = ClientResponseOK<T> | ClientResponseError;
