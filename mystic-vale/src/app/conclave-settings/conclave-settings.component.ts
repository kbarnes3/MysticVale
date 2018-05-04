import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conclave-settings',
  templateUrl: './conclave-settings.component.html',
  styleUrls: ['./conclave-settings.component.css']
})
export class ConclaveSettingsComponent implements OnInit {
  @ViewChild('conclaveSelection') conclaveList;

  constructor() { }

  numberOfConclaves: number = 8;

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
