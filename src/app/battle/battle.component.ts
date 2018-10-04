import { FireBaseService } from './../fire-base.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Fighter } from './../fighter/fighter.model';
import { Fit } from './../fit/fit.model';
import { Battle } from './battle.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  battleName: string;

  currentBattle: Observable<Battle> | null = null;

  constructor(public db: AngularFirestore, private service: FireBaseService) {}

  ngOnInit() {
    this.currentBattle = this.db.doc<Battle>('battles/YF6PjyJWMSxxOz9tKnU3').valueChanges();

    // this.db
    //   .collection('fits')
    //   .valueChanges()
    //   .subscribe((fitResults: Fit[]) => {
    //     for (const fitResult of fitResults) {
    //       let fit = fitResult;

    //       this.db
    //         .doc('fighters/' + fitResult.fighter.id)
    //         .valueChanges()
    //         .subscribe((fighterResult: Fighter) => {
    //           fit.fighter = fighterResult;
    //         });
    //     }
    //   });
  }
}
