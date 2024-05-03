import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
