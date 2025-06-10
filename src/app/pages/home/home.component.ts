
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { HeroComponent } from "../../components/hero/hero.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, RouterLink, HeroComponent],
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const immagini = document.querySelectorAll('.parallax-img');

    immagini.forEach((img: Element) => {
      let offset = (scrollTop * 0.05); // cambia 0.2 per un effetto più o meno intenso
      if (this.viewportWidth > 1024) {
        offset = (scrollTop * 0.3)
      }
      (img as HTMLElement).style.transform = `translateY(-${offset}px)`;
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll(); // inizializza subito se c'è scroll iniziale
  }
}
