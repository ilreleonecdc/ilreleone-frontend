import { Component } from '@angular/core';
import { BubbleComponent } from "../../design/bubble/bubble.component";

@Component({
  selector: 'app-hero',
  imports: [BubbleComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
