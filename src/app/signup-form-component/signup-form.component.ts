import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form ;
  // = new FormGroup({
  //   'account': new FormGroup({
  //     'username': new FormControl('', [
  //       Validators.required,
  //       UsernameValidators.cannotContainSpaces,
  //       Validators.minLength(3),
  //       Validators.maxLength(100)
  //     ],UsernameValidators.uniqueNameValidation),
  //     'password': new FormControl('',[
  //       Validators.required,
  //       Validators.minLength(3),
  //       Validators.maxLength(10)
  //     ])
  //   }),
    
  // })

  constructor (fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: ['',[Validators.required,
              UsernameValidators.cannotContainSpaces,
              Validators.minLength(3),
              Validators.maxLength(100)
            ],UsernameValidators.uniqueNameValidation
          ],
          password: ['',[Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]
        ]
      })
    })
  }
  get username()
  {
    return this.form.get('account.username')
  }
  get password()
  {
    return this.form.get('account.password')
  }
  signup()
  {
    this.form.setErrors({
      loginErrors: true 
    });
    console.log(this.form.value)
  }
}
