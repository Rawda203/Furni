import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] 
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    console.log('AOS:', AOS);
    AOS.init({
      once: false,
      mirror: true,
      duration: 1000,
      easing: 'ease-in-out',
      offset: 150
    });
  }

}
