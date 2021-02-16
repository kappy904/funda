import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Details} from '../components/data/data.interface';
import {catchError, retry, retryWhen} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerApiService {
  url = 'http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getDetails(): any {
    return this.http.get<Details>(this.url).pipe(
      retry(2),
      catchError(PartnerApiService.handleError)
    );
  }
}
