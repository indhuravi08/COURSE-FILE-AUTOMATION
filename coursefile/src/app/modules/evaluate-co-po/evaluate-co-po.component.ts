import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluate-co-po',
  templateUrl: './evaluate-co-po.component.html',
  styleUrls: ['./evaluate-co-po.component.css']
})
export class EvaluateCoPoComponent implements OnInit {
  examType: string | null = null; // Initialize as null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use the nullish coalescing operator to handle undefined cases
    this.examType = this.route.parent?.snapshot.paramMap.get('examType') ?? null;
  }
}
