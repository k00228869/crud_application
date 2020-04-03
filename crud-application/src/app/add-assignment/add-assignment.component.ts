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
assignment: iAssignment;
  
  constructor(
    private formBuilder:FormBuilder,
    private assignmentService: AssignmentService
    //form builder builds form group
    ) {}

  ngOnInit() {
    this.newFormItem = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }
    
    public onSubmit(assignments: iAssignment): void
    {
      // let assignment: iAssignment = {
      //   id: null, name: '', description: ''
      // }
      this.assignmentService.addAssignment(assignments) //call function to add assignment
      .subscribe(assignment =>
        {
          //this.assignment.push(assignment);
        });
      this.newFormItem.reset();//clear form
    } 
}
  

