import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddAssignmentService {
  addAssignment(addassignments: any) {
    throw new Error("Method not implemented.");
  }
  private webURI: string = 'api/addassignments';

  private httpOp = {
    //specifying content format is json
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
    console.log('HTTPDemoService ::constructor()');
   }

   public getAddAssignments():Observable<AddAssignment[]>
  {
    return this.http.get<AddAssignment[]>(this.webURI); //return array of assignments
  }

  public getAddAssignment(addassignment: AddAssignment): Observable<AddAssignment>
  {
    return this.http.post<AddAssignment>(this.webURI, addassignment, this.httpOp); //posting to database
  }
}
