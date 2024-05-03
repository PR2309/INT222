import { Injectable } from '@angular/core';
import { Music } from '../../shared/models/Music';
import { sample_musics } from '../../../data'; 

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }
  getAll():Music[]{return sample_musics;}
}
