import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal<boolean>(this.initializeAuthState());
  private router = inject(Router);

  private initializeAuthState(): boolean {
    const auth = localStorage.getItem('auth');
    return auth === 'true';
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@adm.com' && password === 'admin123') {
      this.isAuthenticated.set(true);
      localStorage.setItem('auth', 'true');
      this.router.navigate(['main']);
      return true;
    } else {
      alert('Invalid credentials');
      this.isAuthenticated.set(false);
      return false;
    }
  }

  logout() {
    this.isAuthenticated.set(false);
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }
}
