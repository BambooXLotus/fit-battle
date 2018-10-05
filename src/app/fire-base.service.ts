import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

import { Fit } from './fit/fit.model';
import { auth } from 'firebase';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private auth: AngularFireAuth) {}

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

  public uploadPhoto(photo: any, fitId: string) {
    const fileName = 'TEST-' + Math.random() * 100 + 1;
    const photoRef = this.storage.ref(fileName);

    const task = this.storage.upload(fileName, photo);

    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          photoRef.getDownloadURL().subscribe((downloadUrl) => {
            this.db.doc<Fit>('fits/' + fitId).update({ photo: downloadUrl });
          })
        )
      )
      .subscribe();
  }

  public login() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
