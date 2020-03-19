import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Assignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class AddAssignmentService {
  
  private webURI: string = 'api/addassignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
    console.log('HTTPDemoService ::constructor()');
   }

   public getAssignments():Observable<Assignment[]>
  {
    return this.http.get<Assignment[]>(this.webURI); //get array of assignments
  }

  public getAssignment(addassignment: Assignment): Observable<Assignment>
  {
    let url:string = this.webURI + "/" + addassignment.id;
    return this.http.get<Assignment>(this.webURI, this.httpOp); 
  }

  public addAssignment(addassignment: Assignment): Observable<Assignment> 
  {
    return this.http.post<Assignment>(this.webURI, addassignment, this.httpOp); //posting to database
  }
}
