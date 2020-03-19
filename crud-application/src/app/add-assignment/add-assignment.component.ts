import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from './add-assignment.service';
import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignments/assignment.service';



@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  providers: [AddAssignmentService],
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  assignments: Assignment[];
  

  constructor(addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
    console.log('HttpDemoComponent::ngOnInit()');

    // this.addassignmentService.getAssignments().subscribe(data => {
    //   console.log(data);
    //   this.assignments = data;
    // });
  }

  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
{
    let assignment: Assignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0

	  this.addassignmentService.addAssignment(assignment).subscribe(
      newAssignment => 
      { 
        console.log(JSON.stringify(newAssignment));
        this.assignments.push(newAssignment); 
      }
    );
}
}
