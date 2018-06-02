import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-masterdetails',
  templateUrl: './masterdetails.component.html',
  styleUrls: ['./masterdetails.component.css']
})

export class MasterdetailsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  
    public fname=localStorage.getItem('firstname')
    public lname=localStorage.getItem('lastname')
    public dob=localStorage.getItem('dob')
    public email=localStorage.getItem('email')
    public pwd=localStorage.getItem('password')

  details:object[]=[{
    firstname:this.fname,
    lastname:this.lname,
    dob:this.dob,
    email:this.email,
    pwd:this.pwd
  }]

  
}
