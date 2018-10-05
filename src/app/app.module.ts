import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { FighterComponent } from './fighter/fighter.component';
import { FitComponent } from './fit/fit.component';
import { HomeComponent } from './home/home.component';
import { JudgeComponent } from './judge/judge.component';

const appRoutes: Routes = [
  { path: 'b', component: BattleComponent },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, BattleComponent, HomeComponent, FighterComponent, FitComponent, JudgeComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
