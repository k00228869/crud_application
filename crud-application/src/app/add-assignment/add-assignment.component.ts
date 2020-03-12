import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/assignment';
import { AddAssignmentService } from '../add-assignment.service';
import { AddAssignment } from '../add-assignment';



@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  private addassignments: AddAssignment[];
  

  constructor(private addassignmentService: AddAssignmentService) { }

  ngOnInit(): void {
    console.log('HttpDemoComponent::ngOnInit()');

    this.addassignmentService.getAddAssignments().subscribe(data => {
      console.log(data);
      this.addassignments = data;
    });
  }

  public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
{
    let addassignments: AddAssignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0

	  this.addassignmentService.addAssignment(addassignments).subscribe(
      newAssignment => 
      { 
        console.log(JSON.stringify(newAssignment));
        this.addassignments.push(newAssignment); 
      }
    );
}
}
