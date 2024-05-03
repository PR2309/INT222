import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Tech } from '../../shared/models/Tech';
import { TechService } from '../../services/Tech/tech.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,SearchComponent],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
  techs:Tech[] = [];
  constructor(private techService:TechService){
    this.techs=this.techService.getAll();
  };
  ngOnInit():void{}
}
