import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from '../add-assignment/add-assignment.service';
import { AssignmentService } from './assignment.service';
import { Assignment } from 'src/assignment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  providers: [AssignmentService],
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  assignments: Assignment;
  
  
  constructor(
    addassignmentService: AddAssignmentService,
    assignmentService: AssignmentService
    ) { }

  ngOnInit(): void {
    
  }
  
  

}
