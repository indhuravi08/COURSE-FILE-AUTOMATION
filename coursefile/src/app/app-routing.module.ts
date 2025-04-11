import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { PeoComponent } from './peo/peo.component';
import { PoComponent } from './po/po.component';
import { PsoComponent } from './pso/pso.component';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamModulesComponent } from './exam-modules/exam-modules.component';
import { AddQuestionPaperComponent } from './modules/add-question-paper/add-question-paper.component';
import { AddAnswerScriptsComponent } from './modules/add-answer-scripts/add-answer-scripts.component';
import { CreateMarksheetComponent } from './modules/create-marksheet/create-marksheet.component';
import { EvaluateCoPoComponent } from './modules/evaluate-co-po/evaluate-co-po.component';
import { RemedialActionsComponent } from './modules/remedial-actions/remedial-actions.component';
import { AuthGuard } from './guards/auth.guard'; // Protect routes with AuthGuard

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default: Go to login

  { path: 'login', component: LoginComponent },           // Public Route
  { path: 'signup', component: SignupComponent },         // Public Route

  // Protected Routes (only accessible after login)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'vision-mission', component: VisionMissionComponent, canActivate: [AuthGuard] },
  { path: 'peo', component: PeoComponent, canActivate: [AuthGuard] },
  { path: 'po', component: PoComponent, canActivate: [AuthGuard] },
  { path: 'pso', component: PsoComponent, canActivate: [AuthGuard] },
  { path: 'lesson-plan', component: LessonPlanComponent, canActivate: [AuthGuard] },
  { path: 'student-list', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'exams', component: ExamsComponent, canActivate: [AuthGuard] },

  // Nested Routes for Exams Module (also protected)
  {
    path: 'exams/:examType',
    component: ExamModulesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'add-question-paper', component: AddQuestionPaperComponent },
      { path: 'add-answer-scripts', component: AddAnswerScriptsComponent },
      { path: 'create-marksheet', component: CreateMarksheetComponent },
      { path: 'evaluate-co-po', component: EvaluateCoPoComponent },
      { path: 'remedial-actions', component: RemedialActionsComponent },
    ],
  },

  // Wildcard route to catch invalid URLs and redirect to login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
