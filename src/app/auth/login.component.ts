import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnLabel :string= "Login"
  linkText :string = "SignUp"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSignUptoggle(){
  if(this.btnLabel !="Sign Up" ){
      this.btnLabel="Sign Up"
      this.linkText= "Login"
  }else{
    this.btnLabel="Login"
    this.linkText= "SignUp"
  }
  }


  login(){
    this.router.navigate(['/user/credentials'])
  }

}
