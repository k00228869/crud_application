import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AppRoutingModule } from './app-routing.module';
import { AssignmentService } from './assignment.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService }  from './in-memory-database.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDatabaseService, { dataEncapsulation: false }),
    AppRoutingModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
