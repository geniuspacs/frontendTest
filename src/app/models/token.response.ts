export class TokenResponse {
  responseCode?: number;
  responseMessage: string;
  token: string;

  constructor() {
    this.responseCode = undefined;
    this.responseMessage = '';
    this.token = '';
  }
}
