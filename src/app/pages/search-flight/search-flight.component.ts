import { Component } from '@angular/core';
import { SearchFormComponent } from "../../components/search-form/search-form.component";

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent {
  datalist:any;
  searchFlightList(flightlist:any){
   this.datalist = flightlist
  }
}
