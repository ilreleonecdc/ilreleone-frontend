import { Component } from '@angular/core';
import { BubbleComponent } from "../../design/bubble/bubble.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-hero',
  imports: [CardModule, ButtonModule, AnimateOnScrollModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
