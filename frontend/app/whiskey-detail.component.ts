import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Whiskey } from './whiskey';
import { WhiskeyService } from './whiskey.service';

@Component({
  selector: 'my-whiskey-detail',
  templateUrl: 'app/whiskey-detail.component.html',
  styleUrls: ['app/whiskey-detail.component.css']
})

export class WhiskeyDetailComponent implements OnInit {
  @Input() whiskey: Whiskey;

  constructor(
    private _whiskeyService: WhiskeyService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._whiskeyService.getWhiskey(id)
      .then(whiskey => this.whiskey = whiskey);
  }

  goBack() {
    window.history.back();
  }
}