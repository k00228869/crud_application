import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
newFormItem: FormGroup;
//assignment: iAssignment;
  
  constructor(private formBuilder:FormBuilder, private assignmentService: AssignmentService
    //form builder builds form group
    ) {}

  ngOnInit() {
    this.newFormItem = this.formBuilder.group({
      name: new FormControl('Assignment Title', Validators.required),
      description: new FormControl('Assignment Description')
    });
  }
    
    public onSubmit(assignment: iAssignment): void
    {
      this.assignmentService.addAssignment(assignment);//call function to add assignment
      this.newFormItem.reset();//clear form

    }
}
  

