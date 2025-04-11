import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-answer-scripts',
  templateUrl: './add-answer-scripts.component.html',
  styleUrls: ['./add-answer-scripts.component.css']
})
export class AddAnswerScriptsComponent implements OnInit {
  examType: string | null = null; // Initialize as null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use the nullish coalescing operator to handle undefined cases
    this.examType = this.route.parent?.snapshot.paramMap.get('examType') ?? null;
  }
}
