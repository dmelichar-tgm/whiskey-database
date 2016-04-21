import { Whiskey } from './whiskey';
import { WHISKEYS } from './mock-whiskeys';
import { Injectable } from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouteParams } from 'angular2/router';

@Injectable()
export class WhiskeyService {
  constructor(private http: Http) { }

  // private _whiskeysUrl = 'app/whiskeys.json'; // URL to JSON file
  private _whiskeysUrl = 'app/whiskeys.json';      // URL to web ap

  getWhiskeys(): Observable<Whiskey[]> {
    return this.http.get(this._whiskeysUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addWhiskey(name: string): Observable<Whiskey> {

    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._whiskeysUrl, body, options)
      .map(res => <Whiskey>res.json().data)
      .catch(this.handleError)
  }

  getWhiskeysSlowly() {
    return new Promise<Whiskey[]>(resolve =>
      setTimeout(() => resolve(WHISKEYS), 2000) // 2 seconds
    );
  }

  getWhiskey(id: number): Observable<Whiskey> {
    let whiskeys = this.http.get(this._whiskeysUrl)
      .map(this.extractData)
      .catch(this.handleError);
    let whiskey = whiskeys.filter(whiskey => whiskey.id === id)
    return whiskey
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }
}