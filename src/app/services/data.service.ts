import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, of, switchMap } from 'rxjs';

const form = "tqs_forms";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageReady = new BehaviorSubject(false);

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    this.storageReady.next(true);
  }

  getData(){
    return this.storageReady.pipe(
      filter(ready => ready),
      switchMap(_ => {
        return from(this.storage.get(form)) || of([]);
      })
    )
  }

  async addData(item: any){
    console.log("dgjfdgn");
    const storedData = await this.storage.get(form) || [];
    storedData.push(item);
    return this.storage.set(form, storedData);
  }

}
