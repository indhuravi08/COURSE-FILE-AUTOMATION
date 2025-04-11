import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-marksheet',
  templateUrl: './create-marksheet.component.html',
  styleUrls: ['./create-marksheet.component.css']
})
export class CreateMarksheetComponent implements OnInit {
  examType: string | null = null; // Initialize as null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use the nullish coalescing operator to handle undefined cases
    this.examType = this.route.parent?.snapshot.paramMap.get('examType') ?? null;
  }
}
