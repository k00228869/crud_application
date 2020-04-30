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

    this.assignmentService.getAssignments().subscribe( //subscribes to the observable, returned by getAssignments()
      (data) => //arrow func gets called and passes in the "data" object
      {
        this.assignmentList = data; //assignmentList equal to data returned
      }
    );
  }

}
