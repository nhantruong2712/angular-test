import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
import { HeroHeaderComponent } from '../shared/hero-header/hero-header.component';

const WHITELIST_EMAILS: readonly string[] = [
  'test@example.com',
  'user@maji.com',
  'admin@maji.com',
  'demo@test.com'
];

interface ToastState {
  show: boolean;
  title: string;
  message: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, HeroHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  toast: ToastState = {
    show: false,
    title: '',
    message: '',
    type: 'success'
  };

  get backgroundImage(): string {
    if (this.isSuccess) {
      return 'assets/image/success.png';
    }
    return 'assets/image/bg.png';
  }

  get inputGradient(): string {
    if (this.isSuccess) {
      return `linear-gradient(90deg, var(--color-dark-text) 1%, var(--color-success) 100%)`;
    }
    if (this.isError) {
      return `linear-gradient(90deg, var(--color-dark-text) 0.96%, var(--color-error) 100%)`;
    }
    return `linear-gradient(90deg, var(--color-dark-text) 0%, var(--color-dark-bg) 100%)`;
  }

  get buttonText(): string {
    if (this.isSuccess) {
      return 'Success';
    }
    return 'Sign in';
  }

  get heroTitle(): string {
    if (this.isSuccess) {
      return "You're exactly where you're meant to be.";
    }
    return 'Good things come\nto those who wait.';
  }

  get heroSubtitle(): string {
    if (this.isSuccess) {
      return "We've secured your place on the MAJI Waiting List.";
    }
    return 'Get Early Access to App and early stage benefits.';
  }

  get inputPlaceholder(): string {
    if (this.isError) {
      return 'Try again';
    }
    return 'E-mail Address';
  }

  get backgroundGradient(): string {
    if (this.isError) {
      return 'linear-gradient(180deg, #171512 0%, #585244 100%)';
    }

    return 'linear-gradient(180deg, #FFF7E3 1%, #585244 100%)';
  }

  onSubmit(): void {
    if (!this.email) {
      return;
    }

    const emailLower = this.email.toLowerCase().trim();
    const isWhitelisted = WHITELIST_EMAILS.includes(emailLower);

    if (isWhitelisted) {
      this.isSuccess = true;
      this.isError = false;
      this.email = '';
      this.showToast('You will be notified about our updates and projects.', 'Congratulations!', 'success');
    } else {
      this.isSuccess = false;
      this.isError = true;
      this.showToast('Email not found. Please try again.', 'Something went wrong...', 'error');
    }
  }

  private showToast(message: string, title: string, type: 'success' | 'error'): void {
    this.toast = {
      show: true,
      message,
      title,
      type
    };
  }

  onToastClose(): void {
    this.toast.show = false;
  }
}

