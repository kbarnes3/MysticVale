import { Injectable } from '@angular/core';
import { Conclave} from './conclave';
import { REQUIRED_CONCLAVES, EXTRA_CONCLAVES } from './conclave-data';

@Injectable()
export class ConclaveService {

  constructor() { }


  randNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }


  generateConclaveSelection(numberOfConclaves: number): Conclave[] {
    const pickedConclaves: Conclave[] = [];
    const requiredConclaves: Conclave[] = Object.assign([], REQUIRED_CONCLAVES);

    // Pick 2 of the required conclaves
    for (let i = 0; i < 2; i++) {
      const pickedIndex: number = this.randNumber(requiredConclaves.length);
      const conclave: Conclave = requiredConclaves[pickedIndex];
      pickedConclaves.push(conclave);
      requiredConclaves.splice(pickedIndex, 1);

    }

    return pickedConclaves;
  }

}
