import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined = [];
  isScrolled: boolean = false;

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Lo Spettacolo', routerLink: '/spettacolo'},
      {
        label: 'La Compagnia', routerLink: '', items: [
        { label: 'Chi Siamo', routerLink: '/compagnia' },
      ]},
      { label: 'Eventi', routerLink: '/eventi'},
      { label: 'Galleria', routerLink: '/galleria' },
      { label: 'Contatti', routerLink: '/contatti' },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
