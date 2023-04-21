import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading: boolean;
  loginForm: FormGroup;

  get usernameLoginForm(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordLoginForm(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(

  ) {
    this.loading = false;
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required])
    });
  }

  load(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  login(): void {
    const loginValue = this.loginForm.value;
    console.log(this.usernameLoginForm);
    this.load();
  }

}
