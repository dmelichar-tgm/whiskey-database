import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Whiskey } from './whiskey';
import { WhiskeyDetailComponent } from './whiskey-detail.component';
import { WhiskeyService } from './whiskey.service';

import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'my-whiskeys',
  templateUrl: 'app/whiskeys.component.html',
  styleUrls:  ['app/whiskeys.component.css'],
  directives: [WhiskeyDetailComponent]
})
export class WhiskeysComponent implements OnInit {
  whiskeys: Whiskey[];
  selectedWhiskey: Whiskey;
  private _whiskeysUrl = 'app/whiskeys.json';  // URL to web api

  constructor(
    private _router: Router,
    private _whiskeyService: WhiskeyService,
    private http: Http) { }

  getWhiskeys() {
    return this.http.get(this._whiskeysUrl)
      .map(res => <Whiskey[]>res.json().data)
      .do(
        console.log(data)
        //data => this.whiskeys = data
       ) // eyeball results in the console
      .catch(this.handleError);
  }

  ngOnInit() {
    this.getWhiskeys();
  }

  onSelect(whiskey: Whiskey) { this.selectedWhiskey = whiskey; }

  gotoDetail() {
    this._router.navigate(['WhiskeyDetail', { id: this.selectedWhiskey.id }]);
  }

  private handleError(error: Response) {
    console.log('hello');
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}