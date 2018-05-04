import { Injectable } from '@angular/core';
import { Conclave} from './conclave';
import { NUMBER_OF_REQUIRED_CONCLAVES, REQUIRED_CONCLAVES, EXTRA_CONCLAVES } from './conclave-data';

@Injectable()
export class ConclaveService {

  constructor() { }


  randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  sortConclaves(a: Conclave, b: Conclave): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  generateConclaveSelection(numberOfConclaves: number): Conclave[] {
    const pickedConclaves: Conclave[] = [];
    let remainingConclaves: Conclave[] = [].concat(REQUIRED_CONCLAVES);

    // Pick some of the required conclaves
    for (let i = 0; i < NUMBER_OF_REQUIRED_CONCLAVES; i++) {
      const pickedIndex: number = this.randNumber(remainingConclaves.length);
      const conclave: Conclave = remainingConclaves[pickedIndex];
      pickedConclaves.push(conclave);
      remainingConclaves.splice(pickedIndex, 1);
    }

    // Add in the rest of conclaves and continue picking
    remainingConclaves = remainingConclaves.concat(EXTRA_CONCLAVES);
    for (let i = NUMBER_OF_REQUIRED_CONCLAVES; i < numberOfConclaves; i++) {
      const pickedIndex: number = this.randNumber(remainingConclaves.length);
      const conclave: Conclave = remainingConclaves[pickedIndex];
      pickedConclaves.push(conclave);
      remainingConclaves.splice(pickedIndex, 1);
    }

    pickedConclaves.sort(this.sortConclaves);
    return pickedConclaves;
  }

}
