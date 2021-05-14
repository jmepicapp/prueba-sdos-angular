import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Album } from 'src/app/shared/models/album';
import { Store } from '../../../../core/store.service';
import { User } from '../../../../shared/models/user';
import { UserDataService } from '../services/user-data.service';
import { Post, PostComment } from '../../../../shared/models/post';
import { AlbumPhoto } from '../../../../shared/models/album';

@Component({
  selector: 'sdos-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  faChevronLeft = faChevronLeft;

  isPostsActive: boolean;
  isAlbumsActive: boolean;

  user: User = this.store.user.getUserSelected();
  albums: Album[];
  posts: Post[];

  constructor(
    private location: Location,
    private store: Store,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.user = this.store.user.getUserSelected();
    this.isAlbumsActive = true;
    this.isPostsActive = false;
    this.getAlbumsByUser();
    this.getPostsByUser();
  }

  goBack():void {
    this.location.back();
  }

  setActiveAlbumsTab(): string {
    if (this.isAlbumsActive) {
      return 'active'
    }
    return '';
  }

  setActivePostsTab(): string {
    if (this.isPostsActive) {
      return 'active'
    }
    return '';
  }

  showAlbums(): void {
    this.isAlbumsActive = true;
    this.isPostsActive = false;
  }

  showPosts(): void {
    this.isAlbumsActive = false;
    this.isPostsActive = true;
  }

  private getAlbumsByUser(): void{
    this.userDataService.getAlbumsByUser(this.user.id).subscribe((albums: Album[]) => {
      this.albums = albums;
      this.albums.forEach((album: Album) => {
        this.userDataService.getPhotosByAlbum(album.id).subscribe((photos: AlbumPhoto[]) => {
          album.photos = photos;
        });
      });
    });
  }

  private getPostsByUser(): void {
    this.userDataService.getPostsByUser(this.user.id).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.posts.forEach((post: Post) => {
        this.userDataService.getCommentsByPost(post.id).subscribe((comments: PostComment[]) => {
          post.comments = comments;
        });
      });
    });
  }

}
