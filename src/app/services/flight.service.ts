import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}
  apiKey = 'bjnGiXrBvuNOa+Mh98+uSeHK1pPLFvhLfvlWt3XYb0w=';
  headers: any = new HttpHeaders({
    ApiKey: this.apiKey,
  });

  getFlightList(obj: any) {
    return this.http
      .post(
        'https://flightapi.flyeasygo.com/api/Flightsearch',
        {
          currenceyCode: 'INR',
          adultCount: '1',
          childCount: '0',
          infantCount: '0',
          directFlight: false,
          journeyType: 0,
          preferredAirlines: '',
          cabinClass: 0,
          segments: [obj],
          fareType: 0,
        },
        { headers: this.headers }
      )
      .pipe(
        map((searchRes: any) => {
          const searchID = searchRes.data.searchID;
          const responseIDs = searchRes.data.responseID;
          const payload = {
            searchId: searchID,
            id: responseIDs[3].id,
          };
          return payload;
        })
      );

      
      // return this.http.post('https://flightapi.flyeasygo.com/api/Flightsearch', { currenceyCode: 'INR', adultCount: '1', childCount: '0', infantCount: '0', directFlight: false, journeyType: 0, preferredAirlines: '', cabinClass: 0, segments: [obj], fareType: 0 }, {headers: this.headers}).pipe(
    //   switchMap((searchRes:any) => {
    //     const searchID = searchRes.data.searchID
    //     const responseIDs = searchRes.data.responseID;
    //     const detailRequests = responseIDs.map((item:any) => {
    //       const payload = {
    //         searchId: searchID,
    //         id: item.id
    //       };
    //       return this.http.post("https://flightapi.flyeasygo.com/api/GetFlightResponse", payload, {headers: this.headers});
    //     });
    //     return forkJoin(detailRequests);
    //   })
    // );
  }
  
  getFlightDetails(payload:any){
    console.log(payload)
    return this.http.post( 'https://flightapi.flyeasygo.com/api/GetFlightResponse', { id : "2025102921122393303e547bad6274eb081b575336c0b98446", searchId:"OPVU0170F631"},
      { headers: this.headers }
    )
  }
}
