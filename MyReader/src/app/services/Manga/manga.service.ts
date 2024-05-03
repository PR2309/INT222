import { Injectable } from '@angular/core';
import { Manga } from '../../shared/models/Manga';
import { sample_mangas } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }
  getAll():Manga[]{return sample_mangas;}
}
