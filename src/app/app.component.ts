import {Component, DoBootstrap, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `angular-bootstrap4 using Angular ${VERSION.full}`;

}
