import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { iAssignment } from 'src/assignment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  public assignmentList: iAssignment[]; //can store an array of iassignments
  
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {

    this.assignmentService.getAssignments().subscribe( //returns observable
      (data) => 
      {
        this.assignmentList = data; //assignmentList variable is equal to the data returned
      }
    );
  }

}
