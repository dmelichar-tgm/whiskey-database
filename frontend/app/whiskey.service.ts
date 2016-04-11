import { Whiskey } from './whiskey';
import { WHISKEYS } from './mock-whiskeys';
import { Injectable } from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class WhiskeyService {
  constructor(private http: Http) { }

  // private _whiskeysUrl = 'app/whiskeys.json'; // URL to JSON file
  private _whiskeysUrl = 'app/whiskeys.json';      // URL to web ap

  getWhiskeys() {
    return this.http.get(this._whiskeysUrl)
      .map(res => <Whiskey[]> res.json().data)
      .do(data => console.log(data))
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

  getWhiskey(id: number) {
    return Promise.resolve(WHISKEYS).then(
      whiskeys => whiskeys.filter(whiskey => whiskey.id === id)[0]
    );
  }

  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}