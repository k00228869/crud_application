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
  public deleteForm:FormGroup;
  public deleteAssignment:iAssignment;


  constructor(
    private assignmentService: AssignmentService,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router,
    private location:Location) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe( //notify change in id 
      (params)=> { //pass id parameter on url
        
        this.assignmentService.getAssignment(params.get("id")).subscribe( //subscribe to the observable
          (data)=> 
          {
            this.deleteAssignment = data; // deleteAssignment equal to data returned
          }
        );
      }
    );

    this.deleteForm = this.formBuilder.group({ // build form group + store in deleteform
      confirmDelete: new FormControl()
    });

  }
  public confirmDeletion(formValues:any):void{
    if(formValues.confirmDelete =="WDF2020") //if either passwords are passed in, delete the assignment 
    {
      this.assignmentService.deleteAssignment(this.deleteAssignment).subscribe( //subscribes to the observable, returned by deleteAssignment()
        (data)=>//arrow func gets called and passes in the "data" object
        {
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
