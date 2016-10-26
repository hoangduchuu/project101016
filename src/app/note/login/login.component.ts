import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user = {};
  userInfo;
  constructor(
      public af: AngularFire
  ) {
      //   this.af.auth.subscribe(user => {
      //   if (user) {
      //     // user logged in
      //     this.user = user;
      //     // console.info(this.user)
      //     this.userInfo = JSON.stringify(this.user);
      //   }
      //   else {
      //     // user not logged in
      //     this.user = null;
      //   }
      // });
  }

  ngOnInit() {
  }

  loginGG() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  loginFB() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  logout() {
    this.af.auth.logout();
  }


}
