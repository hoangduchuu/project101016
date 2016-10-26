import { Component , OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { EmitterService, Term } from './shared/services/emitter.service';
import { EventEmitterService } from  './shared/services/eventEmitter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
    title:string = 'app works!';

    constructor(
      private emitterService: EmitterService,
      private eventEmitterService: EventEmitterService,
      private af: AngularFire,
    ) {}
// comment
    termObject: Term = { term: '', category: null};
    searchNote() {
      console.log('searchNote activated with term is: |' + this.termObject.term)
      this.emitterService.setTerm(this.termObject);
      // this.eventEmitterService.get(this.termObject.term).emit(this.termObject.term);
    }

    filterCategory(typeNote) {
      console.log('filterCategory activated with category is: |' + typeNote)
      this.termObject.category = typeNote;
      this.emitterService.setTerm(this.termObject);
    }

    logout() {
      this.af.auth.logout();
    }

}
