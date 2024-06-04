import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-layout-signals',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SideMenuComponent],
  templateUrl: './layout-signals.component.html',
  styleUrl: './layout-signals.component.scss',
})
export class LayoutSignalsComponent { }
