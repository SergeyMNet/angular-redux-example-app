import { Component } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Newsfeed-App';

  constructor(auth: AuthService) {

    auth.login();
  }
}
