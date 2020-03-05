import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
