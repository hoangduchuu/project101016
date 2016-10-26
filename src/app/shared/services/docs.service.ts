import { Injectable } from '@angular/core';

declare var gapi :any;

@Injectable()
export class DocsService {
  authorizeSilient() {
    console.log('running Docs Service')
    var CLIENT_ID = '168157283311-lsjvp6im9t7srld1uu309f9asrc3i8o4.apps.googleusercontent.com';

    var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly", "https://www.googleapis.com/auth/spreadsheets"];
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      },
      authResult =>   {
        console.log('onInit Fetching result 2',authResult)
        handleAuthResult(authResult);
      });


      function handleAuthResult(authResult) {
         var authorizeDiv = document.getElementById('authorize-div2');
         if (authResult && !authResult.error) {
           // Hide auth UI, then load client library.
           authorizeDiv.style.display = 'none';
           loadSheetsApi();
         } else {
           // Show auth UI, allowing the user to initiate authorization by
           // clicking authorize button.
           authorizeDiv.style.display = 'inline';
           console.info('you must handle authorize by hand to authorize new permission')
         }
       }


       function loadSheetsApi() {
          var discoveryUrl =
              'https://sheets.googleapis.com/$discovery/rest?version=v4';
          gapi.client.load(discoveryUrl).then(console.log('google API ready to use'));
        }


  }

  authorize() {
    var CLIENT_ID = '168157283311-lsjvp6im9t7srld1uu309f9asrc3i8o4.apps.googleusercontent.com';

    var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly", "https://www.googleapis.com/auth/spreadsheets"];
    // console.log('running onInit')
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': false
      },
      authResult =>   {
        console.log('onInit Fetching result 2',authResult)
        handleAuthResult(authResult);
      });

      function handleAuthResult(authResult) {
         var authorizeDiv = document.getElementById('authorize-div2');
         if (authResult && !authResult.error) {
           // Hide auth UI, then load client library.
           authorizeDiv.style.display = 'none';
           loadSheetsApi();
         } else {
           // Show auth UI, allowing the user to initiate authorization by
           // clicking authorize button.
           authorizeDiv.style.display = 'inline';
           console.info('you must handle authorize by hand to authorize new permission')
         }
       }


       function loadSheetsApi() {
          var discoveryUrl =
              'https://sheets.googleapis.com/$discovery/rest?version=v4';
          gapi.client.load(discoveryUrl).then(console.log('google API ready to use'));
        }


  }


  auth2;
  authorize2() {
    gapi.load('auth2', function() {
    this.auth2 = gapi.auth2.init({
      client_id: '168157283311-lsjvp6im9t7srld1uu309f9asrc3i8o4.apps.googleusercontent.com',
      fetch_basic_profile: false,
      scope: 'profile'
    });

    // Sign the user in, and then retrieve their ID.
    this.auth2.signIn().then(function() {
      console.log(this.auth2.currentUser.get().getId());
    });
  });
  }
}
