import { Component, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Conclave } from '../conclave';
import { ConclaveService } from '../conclave.service';


@Component({
    selector: 'app-conclave-selection',
    imports: [MatListModule],
    templateUrl: './conclave-selection.component.html',
    styleUrls: ['./conclave-selection.component.css'],
    
})
export class ConclaveSelectionComponent {
  private conclaveService = inject(ConclaveService);


  conclaveSelection = signal<Conclave[] | undefined>(undefined);

  generateListOfConclaves(numberOfConclaves: number) {
    this.conclaveSelection.set(this.conclaveService.generateConclaveSelection(numberOfConclaves));
  }

}
