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

  //variable to hold URL to api
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
    //returns observable containing all the jason objects
    return this.firestore.collection<iAssignment>('assignments').valueChanges(); 
  }

  //constructs request url with an assignment id and returns single assignment
  public getAssignment(id:string):Observable<iAssignment> 
  {
     //returns an observable of iAssignment
    return this.firestore.collection('assignments').doc<iAssignment>(id).valueChanges(); 
  }

  public addAssignment(newAssignment:iAssignment):Observable<void>
  {
    //generates id using firestore and assign the id to the new assignment
    newAssignment.id = this.firestore.createId(); 

    //create an iAssignment doc in the item collection with the new id and set the value of the doc to that stored in an assignment,
    // returns a promise not observable, converts the promise to an observable of void
    return from(this.firestore.collection('assignments').doc<iAssignment>(newAssignment.id).set(newAssignment)); 
  }

  public deleteAssignment(deleteAssignment:iAssignment):Observable<void>
  {
     //delete assignment that matches the collection id in firestore
    return from(this.firestore.collection('assignments').doc(deleteAssignment.id).delete());
  }

  public updateAssignment(updatedAssignment:iAssignment):Observable<void>
  {
    //go to item collection, get document with equal id, set the doc values to the values of this object
    return from(this.firestore.collection('assignments').doc(updatedAssignment.id).set(updatedAssignment));
  }
}
