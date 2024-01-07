import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventmodel } from '../eventmodel/eventmodel';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  baseurl = "assets/event.json";

  constructor(private http:HttpClient) { }

  ngOnInit():void {}

  fun():Observable<Eventmodel[]> {
    return this.http.get<Eventmodel[]>(`${this.baseurl}`);
  }
}
