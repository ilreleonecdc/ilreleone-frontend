import { Component } from '@angular/core';

@Component({
  selector: 'app-viewport',
  imports: [],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss'
})
export class ViewportComponent {
  viewportWidth = window.innerWidth;
  showDebug = true; // puoi metterlo a false per disattivare

  constructor() {
    window.addEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  }
}
