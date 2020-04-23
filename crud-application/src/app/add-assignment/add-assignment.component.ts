import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  public newAssignment: iAssignment;
  public newFormItem: FormGroup;

 

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentService: AssignmentService,
    private location: Location
    
    ) { }

  ngOnInit() {
    this.newFormItem = this.formBuilder.group //form builder builds form group and stores it in a formgroup variable
    ({
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      dueDate: new FormControl('datePickerControl',Validators.required),
      givenDate: new FormControl('datePickerControl',Validators.required),
      progress: new FormControl(1,Validators.required)
    });
  }
    
  public onSubmit(newAssignment:iAssignment):void
  {
    if(this.newFormItem.status === 'VALID') //if the form is valid
    {
      
      // JH - This returns an observable so we need to subscribe to it. The addAssignment function returns
      // an observable which we need to subscribe to, then some time later the observable will call the 
      // arrow function we passed into the subscribe function and pass in the "data" which is the assignment
      // that has just been successfully added
      this.assignmentService.addAssignment(newAssignment).subscribe( //call function to add assignment.
        (data) => {
          this.newFormItem.reset();//clear form
          this.router.navigate(['/save-assignment']); //navigate to the page that displays all assignments
        }
      );
    }

  } 
  cancel()
  {
    this.location.back(); //navigate back to last location
  }

}
  

