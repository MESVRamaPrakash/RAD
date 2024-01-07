import { Component } from '@angular/core';
// import { ServiceService } from '../service/service.service';
// import { Model } from '../model/model';
import { EventserviceService } from '../eventservice/eventservice.service';
import { Eventmodel } from '../eventmodel/eventmodel';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  modell !: Eventmodel[];
   constructor(private service:EventserviceService){}
   ngOnInit():void {
    this.service.fun().subscribe(data => this.modell = data);
   }
}
// html -> .ts(service,ngoninit()) -> service(model,httpclient,observable,baseurl,method()) -> .json(model)