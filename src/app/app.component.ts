import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MyHammerConfig } from './pages/compagnia/cast/cast.component';
import { ViewportComponent } from "./components/viewport/viewport.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [HammerModule, RouterOutlet, ButtonModule, NavbarComponent, FooterComponent, AnimateOnScrollModule,ViewportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
})
export class AppComponent implements OnInit {
  title = 'ilreleone-frontend';

  ngOnInit(): void {
    AOS.init({once: true, duration: 700});
  }
}
