import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  user !: {
    id:string;
    name:string;
  }
  constructor(private route:ActivatedRoute){}

  ngOnInit():void {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    }
  }
}  
