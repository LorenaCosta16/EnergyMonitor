import { Component, inject } from '@angular/core';
import { LoginHeader } from './components/login-header/login-header';
import { AuthService } from './components/services/auth-service';
import { LoginFormComponent } from './components/login-form/login-form';

@Component({
  selector: 'app-login',
<<<<<<< HEAD
  imports: [LoginHeader, LoginFormComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private auth = inject(AuthService);
=======
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
>>>>>>> 8fb45b3f9f0e51c568a51c7be989daf60f0323d0

  login() {
    this.auth.login();
  }
}
