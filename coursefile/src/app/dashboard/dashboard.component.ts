import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard', // Unique selector for this component
  templateUrl: './dashboard.component.html', // Path to the HTML file
  styleUrls: ['./dashboard.component.css'] // Path to the CSS file
})
export class DashboardComponent {
  dashboardItems = [
    {
      icon: 'school',
      title: 'Vision & Mission',
      description: 'Define your institute’s vision and mission',
      link: '/vision-mission',
    },
    {
      icon: 'description',
      title: 'PEO',
      description: 'Program Educational Objectives',
      link: '/peo',
    },
    {
      icon: 'check_circle',
      title: 'PO',
      description: 'Program Outcomes',
      link: '/po',
    },
    {
      icon: 'star',
      title: 'PSO',
      description: 'Program Specific Outcomes',
      link: '/pso',
    },
    {
      icon: 'library_books',
      title: 'Lesson Plan',
      description: 'Create and manage lesson plans',
      link: '/lesson-plan',
    },
    {
      icon: 'group',
      title: 'Student List',
      description: 'Manage student data',
      link: '/student-list',
    },
    {
      icon: 'assignment',
      title: 'Exams',
      description: 'Manage exams and schedules',
      link: '/exams',
    },
  ];
}
