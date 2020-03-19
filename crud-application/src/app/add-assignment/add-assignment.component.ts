import { Component, OnInit } from '@angular/core';
import { AddAssignmentService } from '../add-assignment.service';
import { Assignment } from 'src/assignment';



@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  private assignments: Assignment[];
  

  constructor(private addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
    console.log('HttpDemoComponent::ngOnInit()');

    this.addassignmentService.getAssignments().subscribe(data => {
      console.log(data);
      this.assignments = data;
    });
  }

  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
{
    let addassignment: Assignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0

	  this.addassignmentService.addAssignment(addassignment).subscribe(
      newAssignment => 
      { 
        console.log(JSON.stringify(newAssignment));
        this.assignments.push(newAssignment); 
      }
    );
}
}
