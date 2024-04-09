import { Component, OnInit } from '@angular/core';
import { menu_list } from '../../../../assets/data/list-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private route:Router,
  ){}

  menu_list:any[] = [];

  ngOnInit(): void {
    this.menu_list = menu_list;
  }

  navigateToPage(path:string):void {
    this.route.navigate([path]);
  }

}
