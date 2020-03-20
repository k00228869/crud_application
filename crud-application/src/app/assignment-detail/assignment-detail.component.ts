import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(
      data => {
        console.log(data);
        this.assignments = data;
      }
    );
  }

  

}
