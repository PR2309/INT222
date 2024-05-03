import { Injectable } from '@angular/core';
import { Novel } from '../../shared/models/Novel';
import { sample_novel } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class NovelService {

  constructor() { }
  getAll():Novel[]{return sample_novel;}
}
