
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-not-found',
  imports: [InputNumberModule, FormsModule, ButtonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  secretNumber = Math.floor(Math.random() * 5) + 1;
  guess: number | null = null;
  guessed: boolean = false;
  message = '';

  checkGuess() {
    console.log("Furbo! il numero segreto è: ", this.secretNumber);
    if (this.guess === this.secretNumber) {
      this.message = `🎉 Bravo! Hai indovinato!`;
      this.guessed = true;
    } else {
      this.message = '😅 Non è corretto. Riprova!'
      this.guess = null;
    }
  }

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * 5) + 1;
    this.guess = null;
    this.guessed = false;
    this.message = '';
  }
}
