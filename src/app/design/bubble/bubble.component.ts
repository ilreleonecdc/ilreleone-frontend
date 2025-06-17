import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bubble',
  imports: [CommonModule, RouterLink],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss'
})
export class BubbleComponent{
}
