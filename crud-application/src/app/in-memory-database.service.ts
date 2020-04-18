import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { iAssignment } from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService 
{
  createDb()//overides method to return any data
  {
    const assignments:iAssignment[] = [
      {id:1, name: 'History Essay', description: 'description of the first assignment',dueDate: '18/06/2020', givenDate:'18/04/2020', progress:'20'},
      {id:2, name: 'Group Project', description: 'description of the second assignment',dueDate: '19/06/2020', givenDate:'14/04/2020', progress:'10'},
      {id:3, name: 'WDF app', description: 'description of the third assignment',dueDate: '17/06/2020', givenDate:'11/04/2020', progress:'50'}
    ];
    return { assignments };
  }

}
