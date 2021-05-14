import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'sdos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faSignOutAlt = faSignOutAlt;

  constructor(
    private router: Router
  ) { }

  login(): void {
    this.router.navigateByUrl('dashboard/list');
  }
}
