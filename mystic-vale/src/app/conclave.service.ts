import { Injectable } from '@angular/core';
import { Conclave} from "./conclave";
import { REQUIRED_CONCLAVES, EXTRA_CONCLAVES } from "./conclave-data";

@Injectable()
export class ConclaveService {

  constructor() { }

  generateConclaveSelection(numberOfConclaves: number): Conclave[] {
    
    return [];
  }

}
