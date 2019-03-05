import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  constructor(private router: Router) { }

  public createAccount(): boolean {
    this.router.navigateByUrl('/login');
    return true;
  }
}
