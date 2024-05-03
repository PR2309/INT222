import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Novel } from '../../shared/models/Novel';
import { NovelService } from '../../services/Novel/novel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novels',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './novels.component.html',
  styleUrl: './novels.component.css'
})
export class NovelsComponent {
  novels:Novel[] = [];
  constructor(private novelService:NovelService){
    this.novels = novelService.getAll();
  };
  ngOnInit():void{

  }
}
