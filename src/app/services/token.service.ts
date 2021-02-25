import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { TokenResponse } from '../models/token.response';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey: string = 'trivial_token';
  constructor(private http: HttpClient) {}

  public store(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  public generateNewToken() {
    var url = `/api_token.php?command=request`;

    return this.http.get<TokenResponse>(`${AppConfig.API_ROOT_URL}${url}`);
  }

  public retrieveToken(): string {
    let storedToken = this.retrieve();
    return storedToken;
  }

  private retrieve(): string {
    let storedToken = localStorage.getItem(this.tokenKey);
    if (!storedToken) throw 'no token found';
    return storedToken;
  }
}
