import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { iAssignment } from 'src/assignment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  updateAssignment:iAssignment;
  updateFormItem:FormGroup;


  constructor(
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private assignmentService: AssignmentService
  ) { }
  
  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
          this.assignmentService.getAssignment(+params.get("id")).subscribe(
          (data) => {
            this.updateAssignment = data;
            this.updateFormItem.controls['name'].setValue(this.updateAssignment.name)
            this.updateFormItem.controls['description'].setValue(this.updateAssignment.description)
            this.updateFormItem.controls['dueDate'].setValue(this.updateAssignment.dueDate)
            this.updateFormItem.controls['givenDate'].setValue(this.updateAssignment.givenDate)
            this.updateFormItem.controls['progress'].setValue(this.updateAssignment.progress)
          }
        )
      }
    );

    this.updateFormItem = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      description: new FormControl(''),
      dueDate: new FormControl(''),
      givenDate: new FormControl(''),
      progress: new FormControl('')
    });
  }

  public onSubmit(updatedAssignment:iAssignment):void
  {
    if(this.updateFormItem.status=='VALID')
    {
      console.log("updating assignment");
      this.updateAssignment.name = updatedAssignment.name;
      this.updateAssignment.name = updatedAssignment.description;
      this.updateAssignment.name = updatedAssignment.dueDate;
      this.updateAssignment.name = updatedAssignment.givenDate;
      this.updateAssignment.name = updatedAssignment.progress;

      this.assignmentService.updateAssignment(this.updateAssignment).subscribe(
        (data)=>{
          this.router.navigate(['/save-assignment']);
        }
      )

      
    }
  }

}
