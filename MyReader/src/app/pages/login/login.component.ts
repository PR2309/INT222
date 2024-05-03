import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // loginform : FormGroup | undefined;
  loginForm!: FormGroup;
  disable: boolean = false;
  ngOnInit() {
    this.setForm();
    if (this.loginForm.valid) {
      this.disable = true;
    }
  }
  constructor(private _router: Router) {}

  setForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

    validatePassword(password: string) {
      if (password.length < 6) {
        alert( 'Password must be at least 6 characters long.');
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
      if(!b) {
        alert("Invaild Email!");
      }
      return b;
    }
    verification(password:string, email:string){
      
      // verification pairs
      if((email==="admin@gmail.com" && password==="@Admin0")){return true;}
      if((email==="user1@yahoo.com" && password==="@User1")){return true;}
      if((email==="user2@OUTLOOK.com" && password==="@User2")){return true;}
      if((email==="user3@gmail.com" && password==="@User3")){return true;}
      // localStorage.setItem('user', JSON.stringify(user));

      if((email==="user4@gmail.com" && password==="@User4")){return true;}
      return false;
    }
    submit() {
      const mail = this.loginForm.value['email'];
      const pass = this.loginForm.value['password'];
      console.log(mail, pass);
  
      if (this.validatePassword(pass) && this.validateMail(mail) && this.verification(pass,mail)) {
        alert('Login Successful!!!');
        this._router.navigate(['home']);
      }
    }
}
