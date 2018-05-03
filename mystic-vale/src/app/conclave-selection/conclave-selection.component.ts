import { Component, OnInit } from '@angular/core';
import { Conclave } from '../conclave';
import { ConclaveService } from '../conclave.service';

@Component({
  selector: 'app-conclave-selection',
  templateUrl: './conclave-selection.component.html',
  styleUrls: ['./conclave-selection.component.css']
})
export class ConclaveSelectionComponent implements OnInit {

  constructor(private conclaveService: ConclaveService) { }

  conclaveSelection: Conclave[];

  ngOnInit() {
  }

  generateListOfConclaves(numberOfConclaves: number) {
    this.conclaveSelection = this.conclaveService.generateConclaveSelection(numberOfConclaves);
  }

}
