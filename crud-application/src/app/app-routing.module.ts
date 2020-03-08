import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Assignment } from 'src/assignment';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

const routes: Routes = [
  // { path: 'assignments', component: AssignmentsComponent},
  // { path: 'edit/id', component: EditAssignmentComponent},
  // { path: 'add/id', component: AddAssignmentComponent},
  { path: 'detail/id', component: AssignmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
