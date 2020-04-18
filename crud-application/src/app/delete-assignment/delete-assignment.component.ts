import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router:Router) { }

  ngOnInit()
  {

    this.route.paramMap.subscribe(
      (params)=> {
        this.deleteAssignment = this.assignmentService.getAssignment(+params.get("id"));
      }
    );

    this.deleteForm = this.formBuilder.group({
      confirmDelete: new FormControl()
    });

  }
  public confirmDeletion(formValues:any):void{
    if(formValues.confirmDelete =="WDF2020")
    {
      this.assignmentService.deleteAssignment(this.deleteAssignment);
      this.router.navigate(['/save-assignments']);
    }
  }
}
