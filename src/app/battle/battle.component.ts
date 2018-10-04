import { FireBaseService } from './../fire-base.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Fighter } from './../fighter/fighter.model';
import { Fit } from './../fit/fit.model';
import { Battle } from './battle.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  battleName: string;

  constructor(public db: AngularFirestore, private service: FireBaseService) {}

  ngOnInit() {
    this.db
      .doc('battles/YF6PjyJWMSxxOz9tKnU3')
      .valueChanges()
      .subscribe((battleResult: Battle) => {
        this.battleName = battleResult.name;
      });

    this.db
      .collection('fits')
      .valueChanges()
      .subscribe((fitResults: Fit[]) => {
        for (const fitResult of fitResults) {
          let fit = fitResult;

          this.db
            .doc('fighters/' + fitResult.fighter.id)
            .valueChanges()
            .subscribe((fighterResult: Fighter) => {
              fit.fighter = fighterResult;
            });
        }
      });
  }
}
