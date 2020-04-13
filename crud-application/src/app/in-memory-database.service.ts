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
      {id:1, name: 'History Essay', description: 'description of the first assignment'},
      {id:2, name: 'Group Project', description: 'description of the second assignment'},
      {id:3, name: 'WDF app', description: 'description of the third assignment'}
    ];
    return { assignments };
  }
}
