import { Component, OnInit } from '@angular/core';

import { AssignmentService } from '../assignment.service';
import { Assignment } from 'src/assignment';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  private assignments: Assignment;
  
  
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    
  }
  
  

}
