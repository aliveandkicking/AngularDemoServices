import { Component, Inject } from '@angular/core';
import { RandomStringToken } from './services/random-string-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor ( @Inject(RandomStringToken) private randomString: string ) {

  }
}
