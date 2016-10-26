import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {
    // Event store
    private  _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID as key
    get(ID: string): EventEmitter<any> {
      if (!this._emitters[ID])
          this._emitters[ID] = new EventEmitter();
          console.log(this._emitters[ID]);
      return this._emitters[ID];
    }
}
