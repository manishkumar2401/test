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
    console.log(flightlist);
    const flight = flightlist
    .filter((el: any) => el.status === 200)
      .map((el:any) => {
        return {
          details:
            el.data.flightSearchRes.tripInfos.recommendation[0]
              .segmentInformation[0],
          price:
            el.data.flightSearchRes.tripInfos.recommendation[0]
              .totalPriceList[0].fareDetails,
        };
      });
    console.log(flight);
    this.datalist = flight;
  }
}
