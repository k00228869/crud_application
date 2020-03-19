import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
// import { Assignment } from 'src/assignment';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

const routes: Routes = [
  { path: 'assignments', component: AssignmentsComponent},
  // { path: 'edit/id', component: EditAssignmentComponent},
  { path: 'add/id', component: AddAssignmentComponent},
  { path: 'detail/id', component: AssignmentDetailComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
