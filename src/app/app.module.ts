import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { UrlHandlingStrategy, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NasaServiceService } from '../services/nasa-service.service';
import { NewComponentComponent } from '../new-component/new-component.component';

class RoutingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: import('@angular/router').UrlTree): boolean {
    return url.toString().startsWith('/newComp');
  }
  extract(
    url: import('@angular/router').UrlTree
  ): import('@angular/router').UrlTree {
    return url;
  }
  merge(
    newUrlPart: import('@angular/router').UrlTree,
    rawUrl: import('@angular/router').UrlTree
  ): import('@angular/router').UrlTree {
    return newUrlPart;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule,
    RouterModule.forRoot([
      {path: 'newComp', component: NewComponentComponent }
    ], {useHash: true, enableTracing: true})
  ],
  providers: [
    NasaServiceService,
    {provide: UrlHandlingStrategy, useClass: RoutingStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule){}

  ngDoBootstrap() { /* this is a placeholder to stop the bootstrapper from complaining */
  }
}
