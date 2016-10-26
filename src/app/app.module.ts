import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MasonryModule } from 'angular2-masonry';

import { BrickService } from './shared/services/brick.service';
import { EmitterService } from './shared/services/emitter.service';
import { EventEmitterService } from './shared/services/eventEmitter.service';
import { GoogleDocsService } from './shared/services/googleDocs.service';
import { DocsService } from './shared/services/docs.service';
import { GoogleFormService } from './shared/services/google-form.service';
import { SendEmailService } from './shared/services/send-email.service';

import { AppComponent } from './app.component';
import {Projectw051016RoutingModule} from './app-routing.module';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { AboutUsComponent } from './shared/pages/about-us/about-us.component';
import { NoteModule } from './note/note.module';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './shared/services/firebase.service';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { CeiboShare } from 'ng2-social-share';
import { ShareModule } from './ng2share/share.module'


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDzZQzaFFtXEUuQZoFA88L03Ue8zsEPn1g',
  authDomain: 'projectw051016.firebaseapp.com',
  databaseURL: 'https://projectw051016.firebaseio.com',
  storageBucket: ''
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
  remember: 'default',
  scope: ['email']
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutUsComponent,
    NoteDetailComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    Projectw051016RoutingModule,
    NoteModule,
    ShareModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    BrickService,
    EmitterService,
    EventEmitterService,
    FirebaseService,
    GoogleDocsService,
    DocsService,
    GoogleFormService,
    SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
