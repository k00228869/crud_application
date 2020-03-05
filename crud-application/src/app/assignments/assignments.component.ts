import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { ASSIGNMENTS } from '../test-assignments';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments = ASSIGNMENTS;
  // assignments = ASSIGNMENTS = {
  //   id: 1,
  //   name: 'testName',
  //   description: 'testDescription'
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
