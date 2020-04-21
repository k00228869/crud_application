import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {
  deleteForm:FormGroup;
  deleteAssignment:iAssignment;


  constructor(
    private assignmentService: AssignmentService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private location:Location) { }

  ngOnInit()
  {

    this.route.paramMap.subscribe(
      (params)=> {
        this.assignmentService.getAssignment(+params.get("id")).subscribe(
          (data)=> 
          {
            this.deleteAssignment = data;
          }
        );
      }
    );

    this.deleteForm = this.formBuilder.group({
      confirmDelete: new FormControl()
    });

  }
  public confirmDeletion(formValues:any):void{
    console.log(JSON.stringify(formValues))
    if(formValues.confirmDelete =="WDF2020 ||wdf2020 ")
    {
      this.assignmentService.deleteAssignment(this.deleteAssignment).subscribe(
        (data)=>
        {
          this.router.navigate(['/save-assignment']);
        }
      );
      
    }
  }
  cancel()
  {
    this.location.back();
  }
}
