import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(
    private router : Router
  ) { }
  isAdmin = false;

  goToHome() {
    this.router.navigate(['home']);
    this.isAdmin = false;
  }

  goToHomeAdmin() {
    this.router.navigate(['home']);
    this.isAdmin = true;
  }
}
