import { Component, OnInit } from '@angular/core';
// import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { Assignment} from 'src/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  private assignments: Assignment;

  constructor(
    assignmentService: AssignmentService) { }

  ngOnInit(): void {
  }

  

}
