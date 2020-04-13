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
assignments: iAssignment[];
  
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
    
    // public onSubmit(assignments: iAssignment): void
    // {
    //   // let assignment: iAssignment = {
    //   //   id: null, name: '', description: ''
    //   // }
    //   this.assignmentService.addAssignment(assignments) //call function to add assignment
    //   .subscribe(assignment =>
    //     {
    //       this.assignments.push(assignments);
    //     });
    //   this.newFormItem.reset();//clear form
    // } 


    // public onSubmit(nameText: string, descriptionText:string) {
    //   // Creating object, Setting id to 0 as it will be set to a correct value
    //   let assignments:iAssignment = {id: null, name: nameText, description: descriptionText};
  
    //   this.assignmentService.addAssignment(assignments).subscribe(   
    //     newFormItem => { 
    //       console.log(JSON.stringify(newFormItem));
    //       this.assignments.push(newFormItem); }
    //   );
    //   this.newFormItem.reset();//clear form
    // }
}
  

