import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import * as AOS from 'aos';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from './pages/compagnia/cast/cast.component';
import { ViewportComponent } from "./components/viewport/viewport.component";

@Component({
  selector: 'app-root',
  imports: [HammerModule, RouterOutlet, ButtonModule, NavbarComponent, FooterComponent, ViewportComponent],
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
