import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Whiskey } from './whiskey';
import { WhiskeyService } from './whiskey.service';

import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  whiskeys: Whiskey[] = [];
  private _whiskeysUrl = 'app/whiskeys.json';  // URL to web api

  constructor(
    private _router: Router,
    private _whiskeyService: WhiskeyService,
    private http: Http) {
  }

  ngOnInit() {
    return this.http.get(this._whiskeysUrl)
      .map(res => <Whiskey[]>res.json().data)
      .do(data => this.whiskeys = data.slice(1, 5)) // eyeball results in the console
      .catch(this.handleError);
  }

  gotoDetail(whiskey: Whiskey) {
    let link = ['WhiskeyDetail', { id: whiskey.id }];
    this._router.navigate(link);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}