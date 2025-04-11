import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {
  exams = ['PT1', 'REMEDIAL 1', 'PT2', 'REMEDIAL 2', 'OPTIONAL', 'END SEMESTER'];

  constructor(private router: Router) {}

  navigateToExam(exam: string): void {
    this.router.navigate(['/exams', exam]);
  }
}
