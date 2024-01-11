import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../services/token.service";
import {ILoginRequest} from "../../models/auth.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';

  constructor(private fb: NonNullableFormBuilder, private authService: AuthService,
              private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {}

  loginForm: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  submit(){
    const request: ILoginRequest = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.login(request).subscribe({
      next:(response) => {
        const user = this.tokenService.getUser();
        this.redirectByRole(user?.role);
      }
      })
  }

    redirectByRole(role:string | undefined){
    switch (role) {
      case "User":
        this.router.navigateByUrl("app/dashboard")
        break;
      case "Admin":
        this.router.navigateByUrl("admin/dashboard")
        break;
      case "Manager":
        this.router.navigateByUrl("admin/dashboard")
        break;
      default:
        // this.tokenService.removeToken();
    }
  }
}
