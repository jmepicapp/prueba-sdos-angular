import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private userSelected: User;

  constructor() {}

  setUserSelected(user: User): void {
    this.userSelected = user;
  }

  getUserSelected(): User {
    return this.userSelected;
  }
}
