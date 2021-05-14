import { Component, Input, OnInit } from '@angular/core';
import { SidebarItem } from '../../models/sidebar-item';

@Component({
  selector: 'sdos-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {

  @Input() sidebarItem: SidebarItem;

  constructor() { }

}
