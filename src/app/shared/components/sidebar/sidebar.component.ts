import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem } from '../../models/sidebar-item';

@Component({
  selector: 'sdos-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  /* The content could be dynamic in it's provided by the backend */
  sidebarItems: SidebarItem[] = [
    {
      icon: faUsers,
      title: 'Usuarios'
    }
  ];

  constructor(
  ) { }

}
