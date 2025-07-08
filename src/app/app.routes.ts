import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';




export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
   
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
   {path:"blog",component:BlogComponent},
{path:'register',component:RegisterComponent},
{ path: 'contact', component: ContactComponent },
    {path:'login',component:LoginComponent},
    {path:'**',component:NotfoundComponent},
    
    
    
    
];
