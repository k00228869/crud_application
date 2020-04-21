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
  assignment: iAssignment;
  newFormItem: FormGroup;
  
  newVal:number=30;

  onChange(event)
  {
    this.newVal = event.value;
  }

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentService: AssignmentService,
    private location: Location
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
      //call function to add assignment.
      // JH - This returns an observable so we need to subscribe to it. The addAssignment function returns
      // an observable which we need to subscribe to, then some time later the observable will call the 
      // arrow function we passed into the subscribe function and pass in the "data" which is the assignment
      // that has just been successfully added
      this.assignmentService.addAssignment(assignment).subscribe(
        (data) => {
          this.newFormItem.reset();//clear form
          this.router.navigate(['/save-assignment']);
        }
      );
      
    }
    else
    {
      console.log(" Add assignment title");
    }
  } 
  cancel()
  {
    this.location.back();
  }
  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + '%';
  //   }

  //   return value;
  // }
}
  

