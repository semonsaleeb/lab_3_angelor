import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
Name: any;
  submitProductForm(form:any){
    console.log(form);
    
  }
}
