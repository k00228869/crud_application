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
    private formBuilder: FormBuilder, 
    private router: Router,
    private assignmentService: AssignmentService,
    private location: Location
    ) { }

  ngOnInit() {
    this.newFormItem = this.formBuilder.group // build formgroup + store object in newFormItem
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
    if(this.newFormItem.status === 'VALID') //if all the form fields are valid
    {       
      this.assignmentService.addAssignment(newAssignment).subscribe( //subscribes to the observable, returned by addAssignment()
        (data) => {//arrow func gets called and passes in the "data" of the new assignment

          this.newFormItem.reset();//reset form
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
  

