import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conclave-settings',
  templateUrl: './conclave-settings.component.html',
  styleUrls: ['./conclave-settings.component.css']
})
export class ConclaveSettingsComponent implements OnInit {
  @ViewChild('conclaveSelection') conclaveList;

  constructor() { }

  ngOnInit() {
    this.onGenerate();
  }

  numberOfConclaves: number = 8;

  onGenerate(): void {
    this.conclaveList.generateListOfConclaves(this.numberOfConclaves);
  }

}
