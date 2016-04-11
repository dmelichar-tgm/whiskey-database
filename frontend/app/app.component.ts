import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { WhiskeyService } from './whiskey.service';
import { DashboardComponent } from './dashboard.component';
import { WhiskeysComponent } from './whiskeys.component';
import { WhiskeyDetailComponent } from './whiskey-detail.component';

import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';

// in-memory web api imports
import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {WhiskeyData}          from './whiskey-data';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Whiskeys']">Whiskeys</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    WhiskeyService,
    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA, { useClass: WhiskeyData }) // in-mem server data
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'WhiskeyDetail',
    component: WhiskeyDetailComponent
  },
  {
    path: '/whiskeys',
    name: 'Whiskeys',
    component: WhiskeysComponent
  }
])
export class AppComponent {
  title = 'Tour of Whiskeys';
}
