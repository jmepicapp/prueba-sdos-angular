import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';
import { Store } from 'src/app/core/store.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'sdos-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];
  faEye = faEye;

  constructor(
    private userDataService: UserDataService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  goToUserDetail(userSelected:User):void {
    this.store.user.setUserSelected(userSelected);
    this.router.navigateByUrl(`detail/${userSelected.id}`);
  }

  private getAllUsers(): void {
    this.userDataService.getAllUsers().subscribe(users => this.users = users)
  }

}
