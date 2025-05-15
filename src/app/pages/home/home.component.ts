import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, CardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  viewportWidth = window.innerWidth;
  showDebug = true; // puoi metterlo a false per disattivare

  constructor() {
    window.addEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  }
}
