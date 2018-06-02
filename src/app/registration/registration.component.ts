import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  register(event){
    event.preventDefault();
    const target=event.target
    const fname=target.querySelector('#fname').value;
    const lname=target.querySelector('#lname').value;
    const email=target.querySelector('#email').value;
    const password=target.querySelector('#password').value;
    const dob=target.querySelector('#dob').value;
    localStorage.setItem("firstname",fname);
    localStorage.setItem("lastname",lname);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("dob",dob);
    window.alert("Successfully registered...!" +" "+fname )
    
    const n=localStorage.getItem('firstname')
  }
}
