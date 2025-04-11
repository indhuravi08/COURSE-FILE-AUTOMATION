import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { PeoComponent } from './peo/peo.component';
import { PoComponent } from './po/po.component';
import { PsoComponent } from './pso/pso.component';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ExamsComponent } from './exams/exams.component';
import { Pt1Component } from './pt1/pt1.component';
import { Pt2Component } from './pt2/pt2.component';
import { Remedial1Component } from './remedial1/remedial1.component';
import { Remedial2Component } from './remedial2/remedial2.component';
import { LoginComponent } from './login/login.component';
import { ExamModulesComponent } from './exam-modules/exam-modules.component';
import { AddQuestionPaperComponent } from './modules/add-question-paper/add-question-paper.component';
import { AddAnswerScriptsComponent } from './modules/add-answer-scripts/add-answer-scripts.component';
import { CreateMarksheetComponent } from './modules/create-marksheet/create-marksheet.component';
import { EvaluateCoPoComponent } from './modules/evaluate-co-po/evaluate-co-po.component';
import { RemedialActionsComponent } from './modules/remedial-actions/remedial-actions.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';

// ✅ Import MaterialModule instead of individual Material imports
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VisionMissionComponent,
    PeoComponent,
    PoComponent,
    PsoComponent,
    LessonPlanComponent,
    StudentListComponent,
    ExamsComponent,
    Pt1Component,
    Pt2Component,
    Remedial1Component,
    Remedial2Component,
    LoginComponent,
    ExamModulesComponent,
    AddQuestionPaperComponent,
    AddAnswerScriptsComponent,
    CreateMarksheetComponent,
    EvaluateCoPoComponent,
    RemedialActionsComponent,
    SignupComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, // ✅ Replacing all individual Angular Material imports
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
