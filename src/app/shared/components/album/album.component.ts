import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'sdos-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
