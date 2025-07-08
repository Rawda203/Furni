import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'] 
})
export class BlogComponent implements AfterViewInit {

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
