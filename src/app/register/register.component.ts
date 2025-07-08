
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _Router: Router) {

  }
registerForm=new FormGroup({
  firstname:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required,
  Validators.pattern(/^[A-Z][a-z]{3,10}$/)]),
  lastname:new FormControl(null),
  email:new FormControl(null),
  age:new FormControl(null),
password:new FormControl(null),
})
submitForm(data:any){
  console.log(data)
   this._Router.navigate(['/login']);
}
}
