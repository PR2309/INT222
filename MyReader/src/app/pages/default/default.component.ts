import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

}
