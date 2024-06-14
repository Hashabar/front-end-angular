import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log('LoginComponent constructed!');
   }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigateByUrl('/home');
        },
        error => {
          console.error('Login error:', error);
          this.error = 'Invalid email or password';
        }
      );
  }

}
