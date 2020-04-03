import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { iAssignment } from '../assignment';


export class InMemoryDataService implements InMemoryDbService 
{
  createDb()//overides method to return any data
  {
    let assignments = [
      {
        id:1, name: 'History Essay', description: 'description of the first assignment'
      },
      {
        id:2, name: 'Group Project', description: 'description of the second assignment'
      },
      {
        id:3, name: 'WDF app', description: 'description of the third assignment'
      }
    ];
    return {assignments};
  }

  generateId(assignments: iAssignment[]): number //ensures an assignment always has an id
  {
    return assignments.length > 0 ? Math.max(...assignments.map(assignment =>
      assignment.id)) + 1: 13;
  }//if array is empty, return 13 if array is not empty return the highest id and add 1
}
