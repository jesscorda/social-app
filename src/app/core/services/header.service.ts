import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { MENUITEMS } from '../components/header/menuItems';
import type { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _selectedItem = new BehaviorSubject<string>(MENUITEMS[0].name);
  selectedItem$ = this._selectedItem.asObservable();

  constructor(private _router: Router) {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_) => {
        const currRoute = this._router.url.split('/')[1];
        const menuItem = MENUITEMS.find((m) => m.route === currRoute);
        if (menuItem) this.setSelectedItem(menuItem.name);
      });
  }

  setSelectedItem(itemName: string): void {
    this._selectedItem.next(itemName);
  }
}
