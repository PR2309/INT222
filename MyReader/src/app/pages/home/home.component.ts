import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SearchComponent,RouterLink,RouterLinkActive,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
