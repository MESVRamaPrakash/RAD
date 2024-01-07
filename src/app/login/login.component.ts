import { Component } from '@angular/core';
import { LoginserviceService } from './service/loginservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:LoginserviceService){}
  ngOnInit():void {}
  onSubmit(MyForm:NgForm){
    const userData = MyForm.value;
    this.service.adduser({username:userData.username, password:userData.password}).subscribe(response =>{
    console.log("success",response);
    });
  }
}
