import { Component, HostListener, OnInit } from '@angular/core';
import { menu_list } from '../../../../../assets/data/list-menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  dropdownProfile: boolean = false;
  menu_list:any[] = [];

  ngOnInit(): void {
    this.menu_list = menu_list;
  }

  toggleDropdown():void {
    this.dropdownProfile = !this.dropdownProfile;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const dropdownElement = document.getElementById('dropdownProfile_id');
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      this.dropdownProfile = false;
    }
  }
}
