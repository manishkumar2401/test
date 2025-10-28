import { Component } from '@angular/core';
import { FlightCardComponent } from "../flight-card/flight-card.component";

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [FlightCardComponent],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css'
})
export class FlightListComponent {

}
