import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ iAssignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
assignment:iAssignment[];

 private assignmentsUrl = 'api/assignments'; //url to api

  httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    console.log('HTTPDemoService ::constructor()');
  }

  public getAssignments(): Observable<iAssignment[]>
  {
    return this.http.get<iAssignment[]>(this.assignmentsUrl, this.httpOp); //get array of assignments from the server
  }

  public getAssignment(id:number): Observable<iAssignment> //constructs request url with an assignment id and returns single assignment
  {
    const url = '${this.assignmentsUrl}/${id}';
    //let url:string = this.assignmentsUrl + "/" + assignment.id;
    return this.http.get<iAssignment>(url, this.httpOp); //posting to database
  }

  public addAssignment(assignment: iAssignment): Observable<iAssignment>
  {
    return this.http.post<iAssignment>(this.assignmentsUrl, assignment, this.httpOp); //posting to db
    //this.assignment.push(assignment);
  }
}
