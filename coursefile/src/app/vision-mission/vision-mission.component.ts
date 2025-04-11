import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  vision: string = '';
  mission: string = '';

  constructor(private http: HttpClient) {}

  saveVisionMission() {
    const data = { vision: this.vision, mission: this.mission };

    this.http.post('http://localhost:5000/api/vision-mission', data).subscribe(
      response => {
        alert('Vision & Mission saved successfully!');
        this.vision = '';
        this.mission = '';
      },
      error => {
        console.error('Error saving vision & mission:', error);
        alert('Error saving data!');
      }
    );
  }
}
