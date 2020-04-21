import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ iAssignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  //variable to hold URL
  private assignmentsUrl: string = 'api/assignments'; //url to api

  httpOptions = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) 
  {}

  public getAssignments():Observable<iAssignment[]>
  {
    return this.http.get<iAssignment[]>(this.assignmentsUrl, this.httpOptions); //return array of assignments from the server
  }

  public getAssignment(id:number):Observable<iAssignment> //constructs request url with an assignment id and returns single assignment
  {
    return this.http.get<iAssignment>(this.assignmentsUrl + "/" + id, this.httpOptions); //get assignment that matches id in url 
  }

  public addAssignment(newAssignment:iAssignment):Observable<iAssignment>
  {
    return this.http.post<iAssignment>(this.assignmentsUrl, newAssignment, this.httpOptions); //posting new assignment to db
  }

  public deleteAssignment(deleteAssignment:iAssignment):Observable<iAssignment>
  {
    return this.http.delete<iAssignment>(this.assignmentsUrl + "/" + deleteAssignment.id, this.httpOptions); //delete assignment that matches id in url 
  }

  public updateAssignment(updatedAssignment:iAssignment):Observable<iAssignment>
  {
   return this.http.put<iAssignment>(this.assignmentsUrl, updatedAssignment, this.httpOptions); //update assignment values with new values
  }

  
}
