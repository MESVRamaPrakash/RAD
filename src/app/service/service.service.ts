import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseurl = '../assets/cards.json'
  savedata: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {}
  card():Observable<Model[]>{
    return this.http.get<Model[]>(`${this.baseurl}`);
  }
}
