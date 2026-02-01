import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroHeaderComponent } from '../shared/hero-header/hero-header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, HeroHeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}

