import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signinForm: FormGroup;
  loading: boolean;

  get nameSigninForm(): FormControl<string> {
    return this.signinForm.get('name') as FormControl<string>
  }
  get emailSigninForm(): FormControl<string> {
    return this.signinForm.get('email') as FormControl<string>
  }
  get passwordSigninForm(): FormControl<string> {
    return this.signinForm.get('password') as FormControl<string>
  }
  get confirmPasswordSigninForm(): FormControl<string> {
    return this.signinForm.get('confirmPassword') as FormControl<string>
  }
  
  constructor() {
    this.signinForm = new FormGroup({
      name: new FormControl<string>('', [ Validators.required ]),
      email: new FormControl<string>('', [ Validators.required, Validators.email ]),
      password: new FormControl<string>('', [ Validators.required ]),
      confirmPassword: new FormControl<string>('', [ Validators.required ])
    });
    this.loading = false;
  }

  signin(): void {
    this.loading = true;
  }

}
