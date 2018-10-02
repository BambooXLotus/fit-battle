import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [AppComponent, BattleComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
