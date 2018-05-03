import { Injectable } from '@angular/core';
import { Conclave} from './conclave';
import { NUMBER_OF_REQUIRED_CONCLAVES, REQUIRED_CONCLAVES, EXTRA_CONCLAVES } from './conclave-data';

@Injectable()
export class ConclaveService {

  constructor() { }


  randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }


  generateConclaveSelection(numberOfConclaves: number): Conclave[] {
    const pickedConclaves: Conclave[] = [];
    const remainingConclaves: Conclave[] = [].concat(REQUIRED_CONCLAVES);

    // Pick some of the required conclaves
    for (let i = 0; i < NUMBER_OF_REQUIRED_CONCLAVES; i++) {
      const pickedIndex: number = this.randNumber(remainingConclaves.length);
      const conclave: Conclave = remainingConclaves[pickedIndex];
      pickedConclaves.push(conclave);
      remainingConclaves.splice(pickedIndex, 1);
    }

    // Add in the rest of conclaves and continue picking
    remainingConclaves.concat(EXTRA_CONCLAVES);
    for (let i = 0; i < NUMBER_OF_REQUIRED_CONCLAVES; i++) {
      const pickedIndex: number = this.randNumber(remainingConclaves.length);
      const conclave: Conclave = remainingConclaves[pickedIndex];
      pickedConclaves.push(conclave);
      remainingConclaves.splice(pickedIndex, 1);
    }

    return pickedConclaves;
  }

}
