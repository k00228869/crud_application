import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { iAssignment } from 'src/assignment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  assignments: iAssignment[];
  
  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    console.log('HttpDemoComponent:: ngOnInit()');

    this.assignmentService.getAssignments().subscribe(
      data => {
        console.log(data);
        this.assignments = data;
      }
    );
  }

}
