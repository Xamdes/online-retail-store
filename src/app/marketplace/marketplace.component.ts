import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  albums: AngularFireList<any[]>;

  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit()  {
    this.albums = this.albumService.getAlbums();
  }

 goToDetailPage(clickedAlbum: Album)
 {
   this.router.navigate(['albums', clickedAlbum.id]);
 }


}
