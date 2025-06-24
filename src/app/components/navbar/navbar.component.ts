import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('menuAnimation', [
      state('open', style({ transform: 'translateX(0)', opacity: 1 })),
      state('closed', style({ transform: 'translateX(-100%)', opacity: 0 })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined = [];
  isScrolled: boolean = false;
  scrollProgress = 0;

  isMenuOpen: boolean = false;
  isAnimatingOut: boolean = false;

  isHome = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
        document.body.classList.remove('no-scroll');
      }
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHome = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
      });
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Compagnia', items: [
          { label: 'Chi Siamo', routerLink: '/compagnia/cast' },
          { label: 'Spettacoli', routerLink: '/compagnia/spettacoli' },
        ]
      },
      { label: 'Grest 2025', routerLink: '/grest' },
      { label: 'Eventi', routerLink: '/eventi' },
      { label: 'Galleria', routerLink: '/galleria' },
      { label: 'Contatti', routerLink: '/contatti' },
      { label: 'About Us', routerLink: '/about-us' },
    ];
  }

  closeMenu() {
    this.isAnimatingOut = true;

    setTimeout(() => {
      this.isMenuOpen = false;
      this.isAnimatingOut = false;
    }, 300);
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
      document.body.classList.remove('no-scroll');
    } else {
      this.isMenuOpen = true;
      document.body.classList.add('no-scroll');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;

    this.isScrolled = scrollTop > 0;
  }
}
