import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { versionInfo } from './version-info';
import { ConclaveSettingsComponent } from './conclave-settings/conclave-settings.component';

interface SetupReference {
  players: number;
  vps: number;
  advancements: number;
}

@Component({
    selector: 'app-root',
    imports: [ConclaveSettingsComponent, MatToolbarModule, MatTableModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mystic Vale Conclave Picker';
  gitVersion: string = versionInfo.hash;

  setupColumns = ['players', 'vps', 'advancements'];
  setupReference: SetupReference[] = [
    { players: 2, vps: 23, advancements: 12 },
    { players: 3, vps: 28, advancements: 15 },
    { players: 4, vps: 33, advancements: 18 },
    { players: 5, vps: 40, advancements: 24 },
    { players: 6, vps: 47, advancements: 30 },
  ];
}
