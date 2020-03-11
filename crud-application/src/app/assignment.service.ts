import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Assignment } from '../assignment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private webURI: string = 'api/assignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    console.log('HTTPDemoService ::constructor()');
  }

  public getAssignments():Observable<Assignment[]>
  {
    return this.http.get<Assignment[]>(this.webURI); //return array of assignments
  }

  public getAssignment(assignment: Assignment): Observable<Assignment>
  {
    return this.http.post<Assignment>(this.webURI, assignment, this.httpOp); //posting to database
  }
}
