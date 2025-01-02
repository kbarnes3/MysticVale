import { Component, OnInit } from '@angular/core';
import { Conclave } from '../conclave';
import { ConclaveService } from '../conclave.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-conclave-selection',
    imports: [CommonModule],
    templateUrl: './conclave-selection.component.html',
    styleUrls: ['./conclave-selection.component.css'],
    
})
export class ConclaveSelectionComponent {

  constructor(private conclaveService: ConclaveService) { }

  conclaveSelection: Conclave[];

  generateListOfConclaves(numberOfConclaves: number) {
    this.conclaveSelection = this.conclaveService.generateConclaveSelection(numberOfConclaves);
  }

}
