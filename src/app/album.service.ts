import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class AlbumService
{
  albums: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums()
  {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    let tempKey = this.albums.push(newAlbum).key;
    let replace = new Album(newAlbum.title,newAlbum.artist,newAlbum.description,tempKey);
    this.albums.update(tempKey,replace);
  }

  updateAlbum(newAlbum: Album, key) {
    this.albums.update(key,newAlbum);
  }

  getAlbumById(albumId)
  {
    let result = this.database.list('albums', ref => ref.equalTo(albumId));
    console.log(result);
    return this.database.object('albums/' + albumId);
  }

}
