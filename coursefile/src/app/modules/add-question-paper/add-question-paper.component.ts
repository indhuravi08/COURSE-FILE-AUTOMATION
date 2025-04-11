import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question-paper',
  templateUrl: './add-question-paper.component.html',
  styleUrls: ['./add-question-paper.component.css']
})
export class AddQuestionPaperComponent implements OnInit {
  examType: string | null = null; // Initialize as null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use the nullish coalescing operator to handle undefined cases
    this.examType = this.route.parent?.snapshot.paramMap.get('examType') ?? null;
  }
}
