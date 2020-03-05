import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { ASSIGNMENTS } from '../test-assignments';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  assignments = ASSIGNMENTS;
  selectedAssignment: Assignment;

  constructor() { }

  ngOnInit(): void {
  }
  
  
  onSelect(assignment: Assignment): void {
    this.selectedAssignment = assignment;
  }
  //assigns the clicked assignment to the components selected assignment

}
