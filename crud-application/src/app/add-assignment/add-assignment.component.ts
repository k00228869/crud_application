import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  assignment: iAssignment;
  newFormItem: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentService: AssignmentService
    //form builder builds form group
    ) { }

  ngOnInit() {
    this.newFormItem = this.formBuilder.group
    ({
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      dueDate: new FormControl('datePickerControl',Validators.required),
      givenDate: new FormControl('datePickerControl',Validators.required),
      progress: new FormControl(1,Validators.required)
    });
  }
    
  public onSubmit(assignment:iAssignment):void
  {
    if(this.newFormItem.status === 'VALID')
    {
      this.assignmentService.addAssignment(this.assignment).subscribe(
        (data)=>
        {
          this.router.navigate(['/save-assignment']);
        }
      );  
      //this.newFormItem.reset();//clear form
    }
    else
    {
      console.log(" Add assignment title");
    }
  } 
  
}
  

