import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cast',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss'
})
export class CastComponent implements OnInit {
  public cast: any;

  ngOnInit(): void {
    const rawCast = [
      { name: "Francesco", surname:"Renghi", role: "Attore", char: "Zazu", quote: "Il palco è magia" },
      { name: "Francesco", surname:"Falomi", role: "Attore/Regista", char: "Rafiki", quote: "Il palco è magia" },
      { name: "Tommaso", surname:"Della Vedova", role: "Attore", char: "Scar", quote: "Il palco è magia" },
      { name: "Chiara", surname:"Brozzi", role: "Attrice", char: "Timon", quote: "Il palco è magia" },
      { name: "Filippo", surname:"Caidominici", role: "Attore", char: "Pumbaa", quote: "Il palco è magia" },
      { name: "Christian", surname:"Pescari", role: "Attore", char: "Mufasa", quote: "Il palco è magia" },
      { name: "Tommaso", surname:"Ascosi", role: "Attore", char: "Simba (adulto)", quote: "Il palco è magia" },
      { name: "Letizia", surname:"Baldelli", role: "Attrice", char: "Nala (adulta)", quote: "Il palco è magia" },
      { name: "Martina", surname:"Fontana", role: "Attrice", char: "Banzai", quote: "Il palco è magia" },
      { name: "Laura", surname:"Feligioni", role: "Attrice", char: "Shenzi", quote: "Il palco è magia" },
      { name: "Lucia", surname:"Polverini", role: "Attrice", char: "Ed", quote: "Il palco è magia" },
      { name: "Diletta", surname:"", role: "Attrice", char: "Nala (giovane)", quote: "Il palco è magia" },
      { name: "Tobia", surname:"", role: "Attore", char: "Simba (giovane)", quote: "Il palco è magia" },
      { name: "Viola", surname:"Signorelli", role: "Attrice", char: "Sarabi", quote: "Il palco è magia" },
    ]

    this.cast = rawCast.map(c => ({
      ...c,
      photo: `../../../../assets/cast/${c.name.toLowerCase()}-${c.surname.toLowerCase()}.jfif`
    }))
  }
}
