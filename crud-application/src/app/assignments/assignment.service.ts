import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Assignment } from '../../assignment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assignmentsUrl = 'api/assignments'; //url to api
  // private webURI: string = 'api/assignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    console.log('HTTPDemoService ::constructor()');
    // this.addassignmentService.getAssignments().subscribe(data => {
    //   console.log(data);
    //   this.assignments = data;
    // });
  }

  public getAssignments(): Observable<Assignment[]>
  {
    return this.http.get<Assignment[]>(this.assignmentsUrl); //get array of assignments from the server
  }

  public getAssignment(assignment:Assignment): Observable<Assignment>
  {
    return this.http.post<Assignment>(this.assignmentsUrl, assignment, this.httpOp); //posting to database
  }
}
