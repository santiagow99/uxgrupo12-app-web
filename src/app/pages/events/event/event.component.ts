import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

}
