import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclave-selection',
  templateUrl: './conclave-selection.component.html',
  styleUrls: ['./conclave-selection.component.css']
})
export class ConclaveSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numberOfConclaves: number;

  generateListOfConclaves(numberOfConclaves: number) {
    this.numberOfConclaves = numberOfConclaves;
  }

}
