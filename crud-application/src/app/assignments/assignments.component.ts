import { Component, OnInit } from '@angular/core';

import { Assignment } from 'src/assignment';
import { ASSIGNMENTS } from '../test-assignments';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  // assignments: Assignment[];
  

  constructor() { }

  ngOnInit(): void {
  }
  
  
  
  //assigns the clicked assignment to the components selected assignment

}
