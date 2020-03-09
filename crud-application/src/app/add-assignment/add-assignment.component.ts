import { Component, OnInit } from '@angular/core';

import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  assignments: Assignment;
  

  constructor(assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }

  
}
