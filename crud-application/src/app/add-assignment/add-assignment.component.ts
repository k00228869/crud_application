import { Component, OnInit } from '@angular/core';

import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  assignments: Assignment[];
  assignmentService: any;

  constructor(assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }

  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string)
{
    let assignments: Assignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription};

	  this.assignmentService.addAssignment(assignments).subscribe(   
      newAssignment => { 
        console.log(JSON.stringify(newAssignment));
        this.assignments.push(newAssignment); }
    );
}
}
