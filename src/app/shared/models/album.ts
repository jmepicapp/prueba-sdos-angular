export interface Album {
  userId: number;
  id: number;
  title: string;
  photos: AlbumPhoto[];
}

export interface AlbumPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
