import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  items:any[] = [
    {
      name:'Wiener Musikverein',
      image:'https://avatars.githubusercontent.com/u/176013?v=3'
    },

    {
      name:'Municipal House',
      image:'https://avatars.githubusercontent.com/u/7?v=4'
    },
    {
      name:'La Sainte-Chapelle',
      image:'https://avatars.githubusercontent.com/u/17?v=4'
    },
    {
      name:'The Glasshouse',
      image:'https://avatars.githubusercontent.com/u/19?v=4'
    },

  ];

  ngOnInit() {
    this.items.forEach((item) => {

    });
  }
}
