import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Manga } from '../../shared/models/Manga';
import { MangaService } from '../../services/Manga/manga.service';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css',
})
export class MangaComponent {
  mangas:Manga[] = [];
  constructor(private mangaService:MangaService){
    this.mangas = mangaService.getAll();
  };
  ngOnInit():void{

  }
}
