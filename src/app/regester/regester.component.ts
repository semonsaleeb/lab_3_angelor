import { Component } from '@angular/core';

import { FormGroup, Validators , FormControl} from '@angular/forms';
import { UsernameValidator } from 'custom-validators/username-validator';
import { PasswordValidator } from 'custom-validators/pass-validator';
import { ConfirmPasswordValidator } from 'custom-validators/confirm-pass';
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {
  registerForm : FormGroup;

  constructor() {
    this.registerForm = new FormGroup({ 
      'name': new FormControl('', Validators.required),
      'username': new FormControl('', [Validators.required,UsernameValidator.cannotContainSpace]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required,PasswordValidator.validate]),
    }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      }else {
        matchingControl.setErrors(null);
      }
    }
  }
  submitForm() {

  }
}
