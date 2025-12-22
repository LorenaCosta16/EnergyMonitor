import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth-service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginFormComponent {
  private auth = inject(AuthService);
  email = '';
  password = '';

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.auth.login(this.email.trim(), this.password.trim());
  }
}
