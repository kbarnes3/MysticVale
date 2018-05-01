import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclave-settings',
  templateUrl: './conclave-settings.component.html',
  styleUrls: ['./conclave-settings.component.css']
})
export class ConclaveSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numberOfConclaves: number = 8;

}
