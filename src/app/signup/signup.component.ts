import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData:any = {username:'',email:'',password:'',reenterpassword:''}
  constructor(private service:ServicesService){}
  ngOnInit():void{}
  onSubmit(){
    this.service.savedata(this.userData).subscribe(data => { 
      console.log("Successfully registered")
    });
  }
}
