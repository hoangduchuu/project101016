import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendEmailService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private commentsUrl = 'https://api.sendgrid.com/v3/mail/send';
     payload;
     sendEmail (body: Object): Observable<any[]> {
       this.payload = {
      	"personalizations": [{"to": [{"email": "hiepxanh@gmail.com"}]}],
      		"from": {"email": "hiepxanh@gmail.com"},
      		"subject": "Hello, World!",
      		"content": [{"type": "text/plain", "value": "Heya!"}]
      }

      let bodyString = JSON.stringify(this.payload); // Stringify payload
      let headers      = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        'Access-Control-Allow-Origin':'*'
     }); // ... Set content type to JSON
      let options       = new RequestOptions({ headers: headers }); // Create a request option

      return this.http.post(this.commentsUrl, bodyString, options) // ...using post request
                       .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
