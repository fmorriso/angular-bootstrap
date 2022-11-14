import { Component, VERSION as ngVersion } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get title(): string {
    return `angular-bootstrap4 using Angular ${ngVersion.full}`;
  }
}
