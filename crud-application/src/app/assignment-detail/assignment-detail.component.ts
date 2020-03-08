import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignment:Assignment;
  constructor() { }

  ngOnInit(): void {
  }

}
