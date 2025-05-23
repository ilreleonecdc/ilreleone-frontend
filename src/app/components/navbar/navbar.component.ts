import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

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

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      {
        label: 'Compagnia', items: [
          { label: 'Chi Siamo', routerLink: '/compagnia' },
          { label: 'Spettacoli', routerLink: '/spettacoli' },
        ]
      },
      { label: 'Grest 2025', routerLink: '/grest' },
      { label: 'Eventi', routerLink: '/eventi' },
      { label: 'Galleria', routerLink: '/galleria' },
      { label: 'Contatti', routerLink: '/contatti' },
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
    } else {
      this.isMenuOpen = true;
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
