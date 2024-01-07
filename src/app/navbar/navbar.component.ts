import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // constructor(private route:Router){}
  constructor(private viewport:ViewportScroller){}

  ngOnInit():void{}

  // onClick() {
  //   this.route.navigateByUrl('/signup')
  // }
  onScroll(elementId:string):void{
    this.viewport.scrollToAnchor(elementId);
  }
}
