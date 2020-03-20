import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { Assignment } from 'src/assignment';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  
  assignments: Assignment[];
  
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
  
  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
{
    let assignment: Assignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0

	  this.assignmentService.addAssignment(assignment).subscribe(
      newAssignment => 
      { 
        console.log(JSON.stringify(newAssignment));
        this.assignments.push(newAssignment); 
      }
    );
  }

}
