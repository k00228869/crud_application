import { Component, OnInit } from '@angular/core';
import { Assignment} from 'src/assignment';
import { AddAssignment } from 'src/add-assignment';
import { AddAssignmentService } from '../add-assignment.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  private addassignments: AddAssignment;

  constructor(
    addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
  }

  

}
