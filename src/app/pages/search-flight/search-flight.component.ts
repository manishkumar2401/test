import { Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [SearchFormComponent, CommonModule],
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css',
})
export class SearchFlightComponent {
  datalist: any;
  searchFlightList(flightlist: any) {
    const flight = {
      details:
        flightlist.data.flightSearchRes.tripInfos.recommendation[0]
          .segmentInformation[0],
      price:
        flightlist.data.flightSearchRes.tripInfos.recommendation[0]
          .totalPriceList[0].fareDetails,
    };
    console.log(flight);
    this.datalist = flight;
  }
}
