import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { LoginHeader } from './components/login-header/login-header';
import { LoginFormComponent } from './components/login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [LoginHeader, LoginFormComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private auth = inject(AuthService);

  login() {
    this.auth.login();
  }
}
