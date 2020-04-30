import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { iAssignment } from 'src/assignment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  public updateAssignment:iAssignment;
  public updateFormItem:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentService: AssignmentService,
    private location:Location
  ) { }
  
  ngOnInit() {
    
    this.route.paramMap.subscribe(//notify change in id 
      (params) => {//pass id parameter on url

          this.assignmentService.getAssignment(params.get("id")).subscribe( //subscribes to the observable, returned by deleteAssignment()
          (data) => { //arrow func gets called and passes in the "data" object

            this.updateAssignment = data; // updateAssignment equal to data returned
            
            //setting values of formcontrols to the values of updateAssignment
            this.updateFormItem.controls['name'].setValue(this.updateAssignment.name)
            this.updateFormItem.controls['description'].setValue(this.updateAssignment.description)
            this.updateFormItem.controls['dueDate'].setValue(this.updateAssignment.dueDate)
            this.updateFormItem.controls['givenDate'].setValue(this.updateAssignment.givenDate)
            this.updateFormItem.controls['progress'].setValue(this.updateAssignment.progress)
          }
        )
      }
    );

    this.updateFormItem = this.formBuilder.group({ // build formgroup + store object in updateFormItem
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      dueDate: new FormControl('datePickerControl'),
      givenDate: new FormControl({value:'', disabled: true}),
      progress: new FormControl(1,Validators.min(1))// progress must be more than 1
    });
  }

  public onSubmit(updatedAssignment:iAssignment):void
  {
    if(this.updateFormItem.status=='VALID')//if all fields of the formgroup are valid
    {
      console.log("updating assignment");

      //setting values entered in form + storing in updateAssignment
      this.updateAssignment.name = updatedAssignment.name;
      this.updateAssignment.description = updatedAssignment.description;
      this.updateAssignment.dueDate = updatedAssignment.dueDate;
      this.updateAssignment.progress = updatedAssignment.progress;

      //call service method to update the db with new values
      this.assignmentService.updateAssignment(this.updateAssignment).subscribe( 
        (data)=>{
          //Then navigate to the page that displays all assignments 
          this.router.navigate(['/save-assignment']); 
        }
      );
    }
  }

  cancel()
  {
    this.location.back(); //navigate back to last location in platforms history
  }

}
