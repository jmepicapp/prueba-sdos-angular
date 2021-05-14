import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'sdos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  isLoggedIn: Observable<boolean>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('login');
  }

}
