import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../../../shared/models/user';
import { Album, AlbumPhoto } from '../../../../shared/models/album';
import { Post, PostComment } from '../../../../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userEndpoint = `${environment.jsonPlaceHolderTypiCodeBasePath}/users`;
  albumEndpoint = `${environment.jsonPlaceHolderTypiCodeBasePath}/albums`;
  postEndpoint = `${environment.jsonPlaceHolderTypiCodeBasePath}/posts`;

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userEndpoint);
  }

  getAlbumsByUser(userId: number): Observable<Album[]> {
    let params = new HttpParams().append('userId', userId.toString());
    return this.http.get<Album[]>(this.albumEndpoint, {params: params});
  }

  getPhotosByAlbum(albumId: number): Observable<AlbumPhoto[]> {
    return this.http.get<AlbumPhoto[]>(`${this.albumEndpoint}/${albumId}/photos`);
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    let params = new HttpParams().append('userId', userId.toString());
    return this.http.get<Post[]>(this.postEndpoint, {params: params});
  }

  getCommentsByPost(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.postEndpoint}/${postId}/comments`);
  }
}
