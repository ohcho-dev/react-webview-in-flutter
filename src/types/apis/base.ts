export interface ApiErrorResponseType {
  message: string;
  code?: string;
  detail: { [key: string]: any };
}
