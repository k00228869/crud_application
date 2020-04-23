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
  public width:number;
  assignmentDetail:iAssignment;
  

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe( //notify change in id
      (params) => //pass id parameter on url
      {
          this.assignmentService.getAssignment(params.get("id")).subscribe( //
            (data) =>
            {
              this.assignmentDetail = data; //stores the observable in data
              this.width = this.assignmentDetail.progress; //sets the width of the progress bar equal to the value of the progress set on the slider
            }
          );
      }
    );
  }
  
  

  cancel()
  {
    this.location.back(); //navigate back to last location
  }

}
