import { Injectable } from '@angular/core';
import { Tech } from '../../shared/models/Tech';
import { sample_techs } from '../../../data';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor() { }
  getAll():Tech[]{return sample_techs;}
}
