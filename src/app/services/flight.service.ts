import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  forkJoin,
  map,
  Observable,
  pipe,
  retry,
  switchMap,
  throwError,
  timer,
} from 'rxjs';

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
        switchMap((searchRes: any) => {
          const searchID = searchRes.data.searchID;
          const responseIDs = searchRes.data.responseID;
          const detailRequests = responseIDs.map((item: any) => {
            const payload = {
              searchId: searchID,
              id: item.id,
            };
            return this.http
              .post(
                'https://flightapi.flyeasygo.com/api/GetFlightResponse',
                payload,
                { headers: this.headers }
              )
              .pipe(
                map((response: any) => {
                  if (response.status == 404) {
                    throw new HttpErrorResponse({
                      status: 404,
                      statusText: response.msg,
                      url: 'https://flightapi.flyeasygo.com/api/GetFlightResponse',
                      error: response.body,
                    });
                  }
                  return response;
                }),

                retry({
                  count: 10,
                  delay: (error, retryCount) => {
                    if (
                      error instanceof HttpErrorResponse &&
                      error.status === 404
                    ) {
                      return timer(1000);
                    }
                    return throwError(() => error);
                  },
                }),
                // Handle the error after all retries have failed
                catchError((error) => {
                  console.error('Final error after retries:', error);
                  return throwError(
                    () =>
                      new Error(
                        'Data could not be loaded after multiple attempts.'
                      )
                  );
                })
              );
          });
          return forkJoin(detailRequests);

          //   return this.http.post( 'https://flightapi.flyeasygo.com/api/GetFlightResponse', { id : "2025102921122393303e547bad6274eb081b575336c0b98446", searchId:"OPVU0170F631"},
          // { headers: this.headers })
        })
      );
  }

  getFlightDetails() {
    const result = this.http
      .post(
        'https://flightapi.flyeasygo.com/api/GetFlightResponse',
        {
          id: '2025102921122393303e547bad6274eb081b575336c0b98446',
          searchId: 'OPVU0170F631',
        },
        { headers: this.headers }
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }
}
