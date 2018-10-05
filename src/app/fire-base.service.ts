import { Fit } from './fit/fit.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  constructor(public db: AngularFirestore, private storage: AngularFireStorage) {}

  public getFit(id: string): Observable<Fit> {
    return this.db.doc<Fit>('fits/' + id).valueChanges();
  }

  public getFighter(id: string): Observable<any> {
    return this.db.doc('fighters/' + id).valueChanges();
  }

  public updateVote(id: string) {
    return this.db
      .doc<Fit>('fits/' + id)
      .collection('votes')
      .add({});
  }

  public getVotes(fitId: string) {
    return this.db
      .doc<Fit>('fits/' + fitId)
      .collection('votes')
      .valueChanges();
  }
}
