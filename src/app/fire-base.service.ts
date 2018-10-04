import { Fighter } from './fighter/fighter.model';
import { Fit } from './fit/fit.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  constructor(public db: AngularFirestore) {}

  public getFit(id: string) {
    this.db.doc('fits/' + id).valueChanges();
  }

  public gitFighter(id: string): Observable<any> {
    return this.db.doc('fighters/' + id).valueChanges();
  }
}
