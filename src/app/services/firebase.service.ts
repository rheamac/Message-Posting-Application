import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( public db: AngularFirestore) { }
  
 
  createUser(value: any){
    return this.db.collection('Users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname
    });
  }

  getPeople(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/people').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  deleteUser(userKey: any){
    return this.db.collection('Users').doc(userKey).delete();
  }
}
