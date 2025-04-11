import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  preparedBy: string = '';
  approvedBy: string = '';

  addRow() {
    const table = document.getElementById('studentTable') as HTMLTableElement;
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    const rowCount = table.rows.length - 1;
    cell1.innerHTML = rowCount.toString();
    cell2.innerHTML = '<input type="text" placeholder="Student Name"/>';
    cell3.innerHTML = '<input type="text" placeholder="Register Number"/>';
  }
}
