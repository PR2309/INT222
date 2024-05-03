import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm!: FormGroup;
  disable: boolean = false;

  ngOnInit() {
    this.setForm();
    if (!this.signupForm.valid) {
      this.disable = true;
    }
  }
  constructor(private _router: Router) {}

  setForm() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required]),
    });
  }

  validatePassword(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please re-enter your password.');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9 ]/.test(password);

    if (!hasUpperCase) {
      alert('Password must contain at least one uppercase letter.');
      return false;
    }

    if (!hasLowerCase) {
      alert('Password must contain at least one lowercase letter.');
      return false;
    }

    if (!hasNumber) {
      alert('Password must contain at least one number.');
      return false;
    }

    if (!hasSpecialChar) {
      alert('Password must contain at least one special character.');
      return false;
    }

    return true;
  }
  validateMail(email: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const b = emailRegex.test(email);
    console.log(b);
    if (!b) {
      alert('Invaild Email!');
    }
    return b;
  }
  store() {
    // function to store the data
  }
  submit() {
    const mail = this.signupForm.value['email'];
    const name = this.signupForm.value['name'];
    const pass = this.signupForm.value['password'];
    const cpass = this.signupForm.value['cpassword'];
    const user = {
      name: name,
      email: mail,
      pass: pass,
    };
    console.log(mail, pass);

    if (this.validatePassword(pass, cpass) && this.validateMail(mail)) {
      // this.store();
      localStorage.setItem('user', JSON.stringify(user));
      alert('Account Created Successfully!!!');

      this._router.navigate(['login']);
    }
  }
}
