import { Component } from '@angular/core';
import { versionInfo } from './version-info';
import { ConclaveSettingsComponent } from './conclave-settings/conclave-settings.component';

@Component({
    selector: 'app-root',
    imports: [ConclaveSettingsComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent {
  title = 'Mystic Vale Conclave Picker';
  gitVersion: string = versionInfo.hash;
}
