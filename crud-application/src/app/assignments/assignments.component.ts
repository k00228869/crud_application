import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from '../add-assignment.service';
import { AssignmentService } from '../assignment.service';
import { Assignment } from 'src/assignment';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  private assignments: Assignment;
  
  
  constructor(private addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
    
  }
  
  

}
