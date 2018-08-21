import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class AlbumService
{
  albums: AngularFireList<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums()
  {
    return this.albums;
  }

  getAlbumById(albumId: number)
  {
    for(let i = 0; i < ALBUMS.length; i++)
    {
      if(ALBUMS[i].id === albumId)
      {
        return ALBUMS[i];
      }
    }
    return null;
  }

}
