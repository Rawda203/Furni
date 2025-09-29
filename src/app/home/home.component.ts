import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
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

  features = [
    { icon: 'assets/images/truck.svg', title: 'Fast & Free Shipping', desc: 'Donec vitae odio quis nisl dapibus malesuada.' },
    { icon: 'assets/images/bag.svg', title: 'Easy to Shop', desc: 'Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor.' },
    { icon: 'assets/images/support.svg', title: '24/7 Support', desc: 'Aliquam vulputate velit imperdiet dolor tempor tristique.' },
    { icon: 'assets/images/return.svg', title: 'Hassle Free Returns', desc: 'Donec vitae odio quis nisl dapibus malesuada.' },
  ];
}
