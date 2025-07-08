import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private _DataService: DataService) {
    this._DataService.getData().subscribe(res => console.log(res));
  }

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
