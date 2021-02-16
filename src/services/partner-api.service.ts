import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Details} from '../components/data/data.interface';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartnerApiService {
  url = `${environment.apiUrl}feeds/Aanbod.svc/json/detail/${environment.apiKey}/koop/${environment.apiCode}/`;

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
