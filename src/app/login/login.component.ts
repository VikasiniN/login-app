import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { } from '../registration';
import { NgIf } from '@angular/common';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {

  }
  check(event){
    event.preventDefault();
    const target=event.target
    
    
    const email=localStorage.getItem('email')
    const pwd=localStorage.getItem('password')

 

  }
}
