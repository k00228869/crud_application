import { Component, OnInit } from '@angular/core';

import { Assignment } from 'src/assignment';
import { ASSIGNMENTS } from '../test-assignments';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  assignments: Assignment;
  
  
  constructor(assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }
  
  
  
  //assigns the clicked assignment to the components selected assignment

}
