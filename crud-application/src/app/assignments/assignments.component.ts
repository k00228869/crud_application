import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { iAssignment } from 'src/assignment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  public assignment: iAssignment[]; //can store an array of assignments
  
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe( //returns observable
      (data) => 
      {
        console.log(data);
        this.assignment = data; //assignments variable is equal to the data returned
      }
    );
  }

}
