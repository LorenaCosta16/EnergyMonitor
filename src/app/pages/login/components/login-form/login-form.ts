import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginFormComponent {
  private auth = inject(AuthService);

  onLogin() {
    this.auth.login();
  }
}
