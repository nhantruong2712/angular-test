import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-header.component.html',
})
export class HeroHeaderComponent {
  @Input() badgeText: string = 'Early Access';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}

