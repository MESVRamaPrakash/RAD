import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  laptop = faLaptopCode;
}
