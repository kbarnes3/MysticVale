import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConclaveSettingsComponent } from './conclave-settings/conclave-settings.component';
import { ConclaveSelectionComponent } from './conclave-selection/conclave-selection.component';
import { ConclaveService } from './conclave.service';


@NgModule({
  declarations: [
    AppComponent,
    ConclaveSettingsComponent,
    ConclaveSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConclaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
