import { Component } from '@angular/core';
import { MENUITEMS } from './menuItems';
import type { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems = MENUITEMS;

  selectedItem$ = this._headerService.selectedItem$

  constructor(private _headerService: HeaderService) {}

  onItemClick(itemName: string): void {
    this._headerService.setSelectedItem(itemName);
  }
}
