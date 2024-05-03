import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Music } from '../../shared/models/Music';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/Music/music.service';
import { SearchComponent } from '../../components/search/search.component';


@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,SearchComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})

export class MusicComponent {
  musics:Music[] = [];
  constructor(private musicService:MusicService){
    this.musics = musicService.getAll();
  };
  ngOnInit():void{

  }
}
