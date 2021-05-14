import { Injectable } from '@angular/core';
import { UserStoreService } from './store/users/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class Store {

  constructor(
    public user: UserStoreService
  ) { }
}
