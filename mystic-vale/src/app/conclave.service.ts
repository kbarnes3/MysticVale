import { Injectable } from '@angular/core';
import { Conclave} from "./conclave";
import { REQUIRED_CONCLAVES, EXTRA_CONCLAVES } from "./conclave-data";

@Injectable()
export class ConclaveService {

  constructor() { }


  generateConclaveSelection(numberOfConclaves: number): Conclave[] {
    let pickedConclaves: Conclave[] = [];
    let requiredConclaves: Conclave[] = Object.assign([], REQUIRED_CONCLAVES);

    // Pick 2 of the required conclaves
    for (let i = 0; i < 2; i++) {
      let conclave: Conclave = requiredConclaves[randNumber(requiredConclaves.length)];
    }

    return [];
  }

}
