import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseurl = 'assets/event.json';
  constructor(private http:HttpClient) { }

  getusers():Observable<any>{
    return this.http.get(this.baseurl);
  }

  adduser(user:any):Observable<any>{
    return this.getusers().pipe(
      map((users:any[])=>{
      users.push(user);
      return this.http.put(this.baseurl,users);
  })
  );
}
}
