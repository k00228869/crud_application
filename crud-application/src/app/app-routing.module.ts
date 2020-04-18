import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { DeleteAssignmentComponent } from './delete-assignment/delete-assignment.component';

const routes: Routes = [
  { path: '', component: AssignmentsComponent, pathMatch: 'full'}, //set to full so it doesnt catch any route
   { path: 'edit/:id', component: EditAssignmentComponent},
  { path: 'assignment/:id', component: AssignmentDetailComponent},
  { path: 'add-assignment', component: AddAssignmentComponent},
  { path: 'assignment-detail/:id', component: AssignmentDetailComponent},
  { path: 'save-assignment', component: AssignmentsComponent},
  { path: 'delete/:id', component: DeleteAssignmentComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
