import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'account': new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        UsernameValidators.cannotContainSpaces,
        Validators.minLength(3),
        Validators.maxLength(100)
      ],UsernameValidators.uniqueNameValidation),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])
    }),
    
  })
  get username()
  {
    return this.form.get('account.username')
  }
  signup()
  {
    this.form.setErrors({
      loginErrors: true 
    });
    console.log(this.form.value)
  }
}
