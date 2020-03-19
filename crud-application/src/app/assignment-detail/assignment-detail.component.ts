import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from '../add-assignment/add-assignment.service';
import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignments/assignment.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignments: Assignment;

  constructor(
    assignmentService: AssignmentService,
    addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
  }

  

}
