import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignment:iAssignment;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe( //notify change in id
      (params) => //pass id parameter on url
      {
          this.assignmentService.getAssignment(+params.get("id")).subscribe(
            (data) =>
            {
              
              this.assignment = data;
              console.log(Number(this.assignment.progress));
              console.log(this.assignment.dueDate);
            }
          );
      }
    );
  }
  
  cancel()
  {
    this.location.back();
  }

}
