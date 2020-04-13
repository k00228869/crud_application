import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ iAssignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {


  //assignments:iAssignment[];

  private assignmentsUrl: string = 'api/assignments'; //url to api

  httpOptions = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) 
  { 
    console.log("service constructing");
  }

  public getAssignments():Observable<iAssignment[]>
  {
    return this.http.get<iAssignment[]>(this.assignmentsUrl, this.httpOptions); //get array of assignments from the server
  }

  public getAssignment(id:number):Observable<iAssignment> //constructs request url with an assignment id and returns single assignment
  {
    return this.http.get<iAssignment>(this.assignmentsUrl + "/" + id, this.httpOptions); //posting to database
    
  }

  public addAssignment(assignment: iAssignment):Observable<iAssignment>
  {
    return this.http.post<iAssignment>(this.assignmentsUrl, assignment, this.httpOptions); //posting to db
  }

  public deleteAssignment(assignment:iAssignment):Observable<iAssignment>
  {
    return this.http.delete<iAssignment>(this.assignmentsUrl + "/" + assignment.id, this.httpOptions);
  }
}
