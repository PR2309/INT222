import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
