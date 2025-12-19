import { Component, inject } from '@angular/core';
import { LoginHeader } from './components/login-header/login-header';
import { AuthService } from '../../services/auth-service';
import { LoginFormComponent } from './components/login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [LoginHeader, LoginFormComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  private auth = inject(AuthService);
  email = '';
  password = '';

  login() {
    this.auth.login(this.email, this.password);
  }
}
