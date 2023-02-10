import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMesageClass: string = ''
  loginMessage: string = ''
  loginForm = this.fBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private api: ApiService, private fBuilder: FormBuilder, private router: Router) { }

  userLogin() {
    if (this.loginForm.valid) {
      let useremail = this.loginForm.value.email || ''
      let password = this.loginForm.value.password || ''
      this.api.login(useremail, password).subscribe((result: any) => {
        console.log(result);
        this.loginMessage = result.message
        this.loginMesageClass = 'alert alert-success text-center mx-3 mt-3'
        localStorage.setItem('token', result.token)
        localStorage.setItem('username', result.username)
        setTimeout(() => {
          this.router.navigateByUrl('/home')
        }, 3000);
      },
        (result: any) => {
          this.loginMessage = result.error.message
          this.loginMesageClass = 'alert alert-danger text-center mx-3 mt-3'
          setTimeout(() => {
            this.loginMessage = ''
            this.loginMesageClass = ''
            this.loginForm.reset()
          }, 2000);
        }
      )
    } else {
      this.loginMessage = 'Invalid inputs'
      this.loginMesageClass = 'alert alert-danger text-center mx-3 mt-3'

      setTimeout(() => {
        this.loginMessage = ''
        this.loginMesageClass = ''
      }, 2000);
    }
  }
}
