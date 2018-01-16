import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DoctorsService {
  private publicDoctorsUrl: string = 'http://localhost:3001/api/getDoctors';
  private API_KEY: string = 'AIzaSyBLMYOXndOguRrYOUjyina0D9n8khIQHqs'

  constructor(private http: HttpClient) { }

  getPublicDoctors() {
    return this.http
      .get(this.publicDoctorsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getListOfLats(address){
    return this.http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.API_KEY}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}
