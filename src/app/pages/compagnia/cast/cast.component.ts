import { CommonModule} from '@angular/common';
import { Component, Injectable, OnInit} from '@angular/core';
import { ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton'
import { CarouselModule } from 'primeng/carousel'
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    const mc = new Hammer.Manager(element);

    mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }));
    mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL, threshold: 10 }));

    return mc;
  }
}

@Component({
  selector: 'app-cast',
  imports: [HammerModule, CarouselModule, CommonModule, CardModule, ButtonModule, SkeletonModule],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss',
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
})
export class CastComponent implements OnInit {
  public cast: any;
  public visible: boolean = false;
  public showHint: boolean = false;

  ngOnInit(): void {
    const rawCast = [
      { name: "Francesco", surname: " Renghi", role: "Attore", charRole: "Maggiordomo del Re", char: "Zazu", quote: "Il palco è magia", charQuote: "Tua madre non ti ha mai detto che non si gioca con il cibo?" },
      { name: "Francesco", surname: " Falomi", role: "Attore/Regista", charRole: "Saggio Sangoma", char: "Rafiki", quote: "Il palco è magia", charQuote: "Simba è Vivo!" },
      { name: "Chiara", surname: " Brozzi", role: "Attrice", charRole: "Amico fedele", char: "Timon", quote: "Il palco è magia", charQuote: "Ho un'idea! E se stesse dalla nostra parte?" },
      { name: "Christian", surname: " Pescari", role: "Attore", charRole: "Re delle Terre del Branco", char: "Mufasa", quote: "Il palco è magia", charQuote: "Un giorno il Sole tramenterà su di me, e si alzerà con te figlio mio." },
      { name: "Diletta", surname: "", role: "Attrice", charRole: "Migliore amica di Simba", char: "Nala (giovane)", quote: "Il palco è magia", charQuote: "Shh Simba, non vedi che sto cacciando con mia madre?" },
      { name: "Filippo", surname: " Caidominici", role: "Attore", charRole: "Amico fedele", char: "Pumbaa", quote: "Il palco è magia", charQuote: "Io mi inquino ai vostri piedi!" },
      { name: "Laura", surname: " Feligioni", role: "Attrice", charRole: "Iena", char: "Shenzi", quote: "Il palco è magia", charQuote: "Ci penso io..." },
      { name: "Letizia", surname: " Baldelli", role: "Attrice", charRole: "Compagna devota", char: "Nala (adulta)", quote: "Il palco è magia", charQuote: "Mi sei mancato molto..." },
      { name: "Lucia", surname: " Polverini", role: "Attrice", charRole: "Iena", char: "Ed", quote: "Il palco è magia", charQuote: "EHEHEHEHEHEHEHEH!!" },
      { name: "Martina", surname: " Fontana", role: "Attrice", charRole: "Iena", char: "Banzai", quote: "Il palco è magia", charQuote: "Ed, finiscila!" },
      { name: "Tobia", surname: "", role: "Attore", charRole: "Aspirante Re", char: "Simba (giovane)", quote: "Il palco è magia", charQuote: "Uuuh guarda, Becco di Banana è spaventato!" },
      { name: "Tommaso", surname: " Ascosi", role: "Attore", charRole: "", char: "Simba (adulto)", quote: "Il palco è magia", charQuote: "Io non sono il Re..." },
      { name: "Tommaso", surname: " Della Vedova", role: "Attore", charRole: "Zio perfido", char: "Scar", quote: "Il palco è magia", charQuote: "Sono circondato da un branco di idioti." },
      { name: "Viola", surname: " Signorelli", role: "Attrice", charRole: "Regina delle Terre del Branco", char: "Sarabi", quote: "Il palco è magia", charQuote: "Simba, dimmi che non è vero." },
    ]


    this.cast = rawCast.map(c => ({
      ...c,
      photo: `../../../../assets/cast/${c.name.toLowerCase()}-${c.surname.toLowerCase().replace(/\s+/g, "")}.jfif`,
      charPhoto: `../../../../assets/cast/personaggi/${c.char.toLowerCase().replace(/\s+/g, "")}.webp`,
      isFlipped: false
    }))

    setTimeout(() => {
      this.visible = true;
    }, 500)

    setTimeout(() => {
      this.showHint = true;
    }, 4000)

  }
}
