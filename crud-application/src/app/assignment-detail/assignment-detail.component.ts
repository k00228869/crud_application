import { Component, OnInit } from '@angular/core';
import { iAssignment } from 'src/assignment';
import { AssignmentService } from '../assignment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignments:iAssignment[];

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(
      data => {
        console.log(data);
        this.assignments = data;
      }
    );
    this.route.paramMap.subscribe( //notify change in id
      (params) => {//pass in id parameter on url
          this.assignmentService.getAssignment(+params.get("id"));//get value and convert to number
        }
    );
  }

  

}
