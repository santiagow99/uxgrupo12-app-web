import {Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";


@Component({
  selector: 'app-update-event',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.css'
})
export class UpdateEventComponent {
  @ViewChild('input_date') dateInputRef: ElementRef;
  constructor() {
    this.dateInputRef = new ElementRef(null); // Inicializar la variable con un valor nulo
  }
  ngAfterViewInit() {
    const dateInput = this.dateInputRef?.nativeElement;
    if (dateInput) {
      dateInput.addEventListener('click', () => {
        dateInput.showPicker()
      });
    } else {
      console.error('Element dateInput not found');
    }
  }
  openDateInput() {
    this.dateInputRef.nativeElement.focus();

  }

}
