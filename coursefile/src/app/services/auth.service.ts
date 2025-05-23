import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Google Sign-In - Not yet implemented in backend
  // googleSignIn(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/google-login`);
  // }
}
