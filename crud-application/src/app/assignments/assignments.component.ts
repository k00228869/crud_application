import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from '../add-assignment.service';
// import { AssignmentService } from '../assignment.service';
import { AddAssignment } from '../add-assignment';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  private addassignments: AddAssignment;
  
  
  constructor(private addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
    
  }
  
  

}
