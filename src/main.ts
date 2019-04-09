import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule, downgradeInjectable } from '@angular/upgrade/static';

import { NasaServiceService } from './services/nasa-service.service';

import * as angular from 'angular';

declare var angular: angular.IAngularStatic;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // downgrade NasaServiceService to angular1 component
  angular.module('testApp').factory('nasaServiceService', downgradeInjectable(NasaServiceService) as any);

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['testApp']);
  console.log('Bootstrapped');

}).catch(err => console.error(err));

