import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menu:MenuItem[]; 

  constructor() {


       this.menu = [/* 
       new MenuItem('#', 'Link 1'),
       new MenuItem('#', 'Link 2'),
       new MenuItem('#', 'Link 3'),
       new MenuItem('#', 'Link 4')

       new MenuItem('#' ,' Button 1'),
       new MenuItem('#' ,' Button 2'),
       new MenuItem('#' ,' Button 3'),
       new MenuItem('#' ,' Button 4')*/

        ];
  }
  ngOnInit() {
  }


}