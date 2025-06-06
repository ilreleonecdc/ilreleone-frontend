import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CoomingSoonComponent } from "./cooming-soon/cooming-soon.component";
import * as AOS from 'aos';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from './pages/compagnia/cast/cast.component';
import { ViewportComponent } from "./components/viewport/viewport.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HammerModule, RouterOutlet, ButtonModule, NavbarComponent, FooterComponent, CoomingSoonComponent, ViewportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}]
})
export class AppComponent implements OnInit {
  title = 'ilreleone-frontend';

  ngOnInit(): void {
    AOS.init();
  }
}
