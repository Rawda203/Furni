import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,HomeComponent,AboutComponent,BlogComponent,ShopComponent,ContactComponent,LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'my-project';
}
