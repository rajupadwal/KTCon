import { Component } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private router:Router) { }


  public registerUser(): boolean {
    this.router.navigateByUrl('/register');
    return true;
  }

  public login(): boolean {
    this.router.navigateByUrl('/dashboard');
    return true;
  }
}
