import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}
  apiKey = 'bjnGiXrBvuNOa+Mh98+uSeHK1pPLFvhLfvlWt3XYb0w=';
  headers:any = new HttpHeaders({
    ApiKey: this.apiKey, // Or 'Authorization': `Bearer ${this.apiKey}` depending on your API
  });

  getFlightList(obj: any) {
    return this.http.post('https://flightapi.flyeasygo.com/api/Flightsearch', { currenceyCode: 'INR', adultCount: '1', childCount: '0', infantCount: '0', directFlight: false, journeyType: 0, preferredAirlines: '', cabinClass: 0, segments: [obj], fareType: 0 }, {headers: this.headers});
  }
}
