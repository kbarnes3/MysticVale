import { Component, inject } from '@angular/core';
import { Conclave } from '../conclave';
import { ConclaveService } from '../conclave.service';


@Component({
    selector: 'app-conclave-selection',
    imports: [],
    templateUrl: './conclave-selection.component.html',
    styleUrls: ['./conclave-selection.component.css'],
    
})
export class ConclaveSelectionComponent {
  private conclaveService = inject(ConclaveService);


  conclaveSelection: Conclave[];

  generateListOfConclaves(numberOfConclaves: number) {
    this.conclaveSelection = this.conclaveService.generateConclaveSelection(numberOfConclaves);
  }

}
