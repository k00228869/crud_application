import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assignment } from 'src/assignment';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
