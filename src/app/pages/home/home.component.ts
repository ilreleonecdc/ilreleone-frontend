import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { HeroComponent } from "../../components/hero/hero.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, CardModule, RouterLink, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
