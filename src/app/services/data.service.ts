import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { 
    console.log('dataServiceWorking')
  }

  getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  .pipe(map(res => res.json()));
  }

}
