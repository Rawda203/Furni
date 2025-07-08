import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _HttpClient:HttpClient) { 

  }
  getData():Observable<any>{
     return this._HttpClient.get('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
  }
}
