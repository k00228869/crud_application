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

  private assignments:iAssignment;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    // this.assignmentService.getAssignments().subscribe(
    //   data => {
    //     console.log(data);
    //     this.assignments = data;
    //   }
    // );
    this.route.params.subscribe(
      (param) => {//pass parameters on url
        console.log(param); 
        if(param)
        {
          this.assignmentService.getAssignment(param.id);//get value and convert to number
        }
      }
    );
  }

  

}
