import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Assignment } from '../assignment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  // assignmentsUrl = 'api/assignments'; //url to api
  private webURI: string = 'api/assignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    console.log('HTTPDemoService ::constructor()');
  }

  public getAssignments(): Observable<Assignment[]>
  {
    return this.http.get<Assignment[]>(this.webURI); //get array of assignments from the server
  }

  public getAssignment(assignment:Assignment): Observable<Assignment>
  {
    let url:string = this.webURI + "/" + assignment.id;
    return this.http.post<Assignment>(this.webURI, assignment, this.httpOp); //posting to database
  }

  public addAssignment(assignment: Assignment): Observable<Assignment>
  {
    return this.http.post<Assignment>(this.webURI, assignment, this.httpOp); //posting to db
  }
}
