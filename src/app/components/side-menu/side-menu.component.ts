import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem{
  title: string;
  route:string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  public menuItem = signal<MenuItem[]>([
    {title:'Contador', route:'counter'},
    {title:'Usuario', route:'user-info'},
    {title:'Mutaciones', route:'properties'},
  ])
}
