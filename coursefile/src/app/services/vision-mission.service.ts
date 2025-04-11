import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisionMissionService {
  private apiUrl = 'http://localhost:5000/api/vision-mission';

  constructor(private http: HttpClient) { }

  saveVisionMission(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, data);
  }
}
