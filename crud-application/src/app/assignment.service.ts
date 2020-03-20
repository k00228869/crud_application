import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ iAssignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  // assignmentsUrl = 'api/assignments'; //url to api
  private webURI: string = 'api/assignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    console.log('HTTPDemoService ::constructor()');
  }

  public getAssignments(): Observable<iAssignment[]>
  {
    return this.http.get<iAssignment[]>(this.webURI); //get array of assignments from the server
  }

  public getAssignment(assignment:iAssignment): Observable<iAssignment>
  {
    let url:string = this.webURI + "/" + assignment.id;
    return this.http.post<iAssignment>(this.webURI, assignment, this.httpOp); //posting to database
  }

  public addAssignment(assignment: iAssignment): Observable<iAssignment>
  {
    return this.http.post<iAssignment>(this.webURI, assignment, this.httpOp); //posting to db
  }
}
