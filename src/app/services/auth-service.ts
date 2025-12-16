import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuthenticated = signal<boolean>(this.initializeAuthState());
  private router = inject(Router);

  private initializeAuthState():boolean {
    const auth = localStorage.getItem("auth");
    return auth === "true";
  }

  login() {
    this.isAuthenticated.set(true);
    localStorage.setItem("auth", "true");
    this.router.navigate(['home'])
  }

  logout() {
    this.isAuthenticated.set(false);
    localStorage.removeItem("auth");
    this.router.navigate([''])
  }

}
