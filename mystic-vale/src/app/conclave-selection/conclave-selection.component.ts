import { Component, OnInit } from '@angular/core';
import { ConclaveService } from "../conclave.service";

@Component({
  selector: 'app-conclave-selection',
  templateUrl: './conclave-selection.component.html',
  styleUrls: ['./conclave-selection.component.css']
})
export class ConclaveSelectionComponent implements OnInit {

  constructor(private conclaveService: ConclaveService) { }

  ngOnInit() {
  }

  generateListOfConclaves(numberOfConclaves: number) {
    conclaveSelection = this.conclaveService.generateConclaveSelection(numberOfConclaves);
  }

}
