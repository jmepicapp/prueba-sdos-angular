import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './components/album/album.component';
import { PostComponent } from './components/post/post.component';

const components = [
  HeaderComponent,
  SidebarComponent,
  SidebarItemComponent,
  AlbumComponent,
  PostComponent
]

@NgModule({
  declarations: [
    ...components,
    AlbumComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ...components
  ]
})
export class SharedModule { }
