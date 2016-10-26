import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class Term {
  term: string;
  category: string;
}

@Injectable()
export class EmitterService {

  private termObject: Term;
  private subject: Subject<Term> = new Subject<Term>();

  setTerm(termObject: Term): void {
    console.log("Object transfering IN THE AIR .....")
    console.log(termObject)
    if (termObject.term == '') {
      // it okay, we are doing filter by category
    } else if ( termObject.term != '' && termObject.category != null ) {
      // We must set it empty to do only filter with term searching
      console.info('clear category to null')
      termObject.category = null;
    }

    this.termObject = termObject;
    this.subject.next(termObject);
  }

  getTerm(): Observable<Term> {
    return this.subject.asObservable();
  }
}
