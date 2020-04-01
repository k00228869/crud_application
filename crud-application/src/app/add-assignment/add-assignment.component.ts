import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
 Private newFormItem: FormGroup;
  assignment: iAssignment;
  
  constructor(private assignmentService: AssignmentService,
    private formBuilder:FormBuilder
    //form builder builds form group
    ) { }

  ngOnInit(): void {
//     public addNewAssignment(newAssignmentTitle: string, newAssignmentDescription: string) 
// {
//     let assignment: iAssignment = {id: null, name: newAssignmentTitle, description: newAssignmentDescription}; //create an assignment object with id of 0
// 	  this.assignmentService.addAssignment(assignment).subscribe(
//       newAssignment => 
//       { 
//         console.log(JSON.stringify(newAssignment));
//         this.assignments.push(newAssignment); 
//       }
//     );
//   }
  }
  
}
