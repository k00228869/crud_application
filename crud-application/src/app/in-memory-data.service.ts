import { InMemoryDbService } from './angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService 
{
  createDb()
  {
    const assignments = [
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
}
