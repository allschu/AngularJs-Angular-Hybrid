import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <router-outlet></router-outlet>
            <div class="ng-view"></div>`
})
export class AppComponent {
  title = 'migration-app';
}
