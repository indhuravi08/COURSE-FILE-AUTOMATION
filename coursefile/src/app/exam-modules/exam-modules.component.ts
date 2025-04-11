import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-modules',
  templateUrl: './exam-modules.component.html',
  styleUrls: ['./exam-modules.component.css']
})
export class ExamModulesComponent implements OnInit {
  examType: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.examType = this.route.snapshot.paramMap.get('examType');
  }

  navigateToModule(module: string): void {
    this.router.navigate([module], { relativeTo: this.route });
  }
}
