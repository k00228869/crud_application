import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,from } from 'rxjs';
import{ iAssignment } from '../assignment';
import { catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(
    private http: HttpClient,
    private firestore:AngularFirestore) 
  {}

  public getAssignments():Observable<iAssignment[]>
  {
    //return this.http.get<iAssignment[]>(this.assignmentsUrl, this.httpOptions); //return array of assignments from the server
    return this.firestore.collection<iAssignment>('assignments').valueChanges(); //returns observable containing all the jason objects
  }

  public getAssignment(id:string):Observable<iAssignment> //constructs request url with an assignment id and returns single assignment
  {
    //return this.http.get<iAssignment>(this.assignmentsUrl + "/" + id, this.httpOptions); //get assignment that matches id in url 
    return this.firestore.collection('assignments').doc<iAssignment>(id).valueChanges(); //returns an observable of iAssignment
  }

  public addAssignment(newAssignment:iAssignment):Observable<void>
  {
    //return this.http.post<iAssignment>(this.assignmentsUrl, newAssignment, this.httpOptions); //posting new assignment to db
    newAssignment.id = this.firestore.createId(); //generate an id using firestore and assignt the id to the new assignment
    return from(this.firestore.collection('assignments').doc<iAssignment>(newAssignment.id).set(newAssignment)); //create an iAssignment doc in the item collection with the new id and set the value of the doc to that stored in an assignment, returns a promise not observable, from converts the promise to an observable of void
  }

  public deleteAssignment(deleteAssignment:iAssignment):Observable<void>
  {
    //return this.http.delete<iAssignment>(this.assignmentsUrl + "/" + deleteAssignment.id, this.httpOptions); //delete assignment that matches id in url 
    return from(this.firestore.collection('assignments').doc(deleteAssignment.id).delete());
  }

  public updateAssignment(updatedAssignment:iAssignment):Observable<void>
  {
    return from(this.firestore.collection('assignments').doc(updatedAssignment.id).set(updatedAssignment)); //go to item collection, get document with equal id, set the doc values to the values of this object
   //return this.http.put<iAssignment>(this.assignmentsUrl, updatedAssignment, this.httpOptions); //update assignment values with new values, 

  }

  
}
