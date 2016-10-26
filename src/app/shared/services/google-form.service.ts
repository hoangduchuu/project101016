import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GoogleFormService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private url = 'https://docs.google.com/forms/d/e/1FAIpQLSd0Rsg7I-c2moNMTtNS5TdYCx9sxJWeL8Pap14qrOzzW4370w/formResponse';

    sendForm (body: Object): Observable<any[]> {

        let headers      = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.url, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


}
