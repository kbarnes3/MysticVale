import { Component, OnInit, ViewChild } from '@angular/core';
import { ConclaveSelectionComponent } from '../conclave-selection/conclave-selection.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-conclave-settings',
    imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, ConclaveSelectionComponent],
    templateUrl: './conclave-settings.component.html',
    styleUrls: ['./conclave-settings.component.css'],
    
})
export class ConclaveSettingsComponent implements OnInit {
  @ViewChild('conclaveSelection', { static: true }) conclaveList;

  numberOfConclaves = 6;

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
