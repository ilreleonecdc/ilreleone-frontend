import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cooming-soon',
  imports: [],
  templateUrl: './cooming-soon.component.html',
  styleUrl: './cooming-soon.component.scss'
})
export class CoomingSoonComponent implements OnInit{
  bubbles = Array(50);

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      const els = document.querySelectorAll('.bubble');
      els.forEach(el => {
        const size = Math.random() * 40 + 10;       // 10px – 50px
        const left = Math.random() * 100;           // 0% – 100%
        const delay = Math.random() * 5;            // 0s – 5s
        const duration = Math.random() * 10 + 5;    // 5s – 15s
        this.renderer.setStyle(el, 'width', `${size}px`);
        this.renderer.setStyle(el, 'height', `${size}px`);
        this.renderer.setStyle(el, 'left', `${left}%`);
        this.renderer.setStyle(el, 'animation-delay', `${delay}s`);
        this.renderer.setStyle(el, 'animation-duration', `${duration}s`);
      });
    }, 0);
  }

}
