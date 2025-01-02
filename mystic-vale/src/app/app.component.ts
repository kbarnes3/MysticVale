import { Component } from '@angular/core';
import { versionInfo } from './version-info';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'Mystic Vale Conclave Picker';
  gitVersion: string = versionInfo.hash;
}
