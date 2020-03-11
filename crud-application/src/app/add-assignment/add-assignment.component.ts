import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';



@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  private assignments: Assignment[];
  

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    console.log('HttpDemoComponent::ngOnInit()');

    this.assignmentService.getAssignments().subscribe(data => {
      console.log(data);
      this.assignments = data;
    });
  }

  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
{
    let assignments: Assignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0

	  this.assignmentService.addAssignment(assignments).subscribe(
      newAssignment => 
      { 
        console.log(JSON.stringify(newAssignment));
        this.assignments.push(newAssignment); 
      }
    );
}
}
