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
  items: MenuItem[] = [];
  isScrolled: boolean = false;

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/', icon: 'pi pi-home' },
      { label: 'Lo Spettacolo', routerLink: '/spettacolo', icon: 'pi pi-star' },
      { label: 'La Compagnia', routerLink: '/compagnia'},
      { label: 'Eventi', routerLink: '/eventi' , icon: 'pi pi-calendar' },
      { label: 'Galleria', routerLink: '/galleria', icon: 'pi pi-image' },
      { label: 'Contatti', routerLink: '/contatti', icon: 'pi pi-envelope' },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
