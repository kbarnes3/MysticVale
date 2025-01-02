import { Component, OnInit, ViewChild } from '@angular/core';
import { ConclaveSelectionComponent } from '../conclave-selection/conclave-selection.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-conclave-settings',
    imports: [FormsModule, ConclaveSelectionComponent],
    templateUrl: './conclave-settings.component.html',
    styleUrls: ['./conclave-settings.component.css'],
    
})
export class ConclaveSettingsComponent implements OnInit {
  @ViewChild('conclaveSelection', { static: true }) conclaveList;

  constructor() { }

  numberOfConclaves: number = 6;

  ngOnInit() {
    this.onGenerate();
  }

  onNumberChanged(): void {
    this.onGenerate();
  }

  onGenerate(): void {
    this.conclaveList.generateListOfConclaves(this.numberOfConclaves);
  }

}
