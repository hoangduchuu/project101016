import { Component, OnInit, Output, EventEmitter , SimpleChange , Input, ViewEncapsulation} from '@angular/core';
import { Brick } from '../../shared/models/brick';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

export interface FirebaseAuthState {
  uid: string;
  provider: AuthProviders;
  auth: firebase.User;
  expires?: number;
  github?: firebase.UserInfo;
  google?: firebase.UserInfo;
  twitter?: firebase.UserInfo;
  facebook?: firebase.UserInfo;
  anonymous?: boolean;
}

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateNoteComponent implements OnInit {

  noteTypes = [
    {value:'love',
    display: 'Yêu Thương'},
    {value:'thank',
    display: 'Cảm Ơn'},
    {value:'sorry',
    display: 'Xin Lỗi'},
    {value:'forever',
    display: '5 Ngày Cho Mãi Mãi'}
  ]

  constructor(
    private firebaseService : FirebaseService,
    private af: AngularFire,
    private router: Router
  )  {
    this.af.auth.subscribe(auth => {
      if (auth != null) {
        this.newNote.author = auth.uid
      }
    });
  }

  ngOnInit() {
    this. active = true ;
  }

  @Output() noteCreated = new EventEmitter();
    newNote = new Brick();
    active: boolean = false ;

    formData : Brick;
    onSubmit(formValue:Brick) {
      //show event that the user was created
      // this.newNote = new Brick();
      this.noteCreated.emit({note:this.newNote})
      console.log("Sending to firebase ...")
      console.info(this.newNote)
      // console.info(formValue)
      // this.formData = formValue;
      // console.info(  this.formData)
      this.firebaseService.addNote(this.newNote);
      console.log("Closing form...")
      this.router.navigate(['/']);
      this.active = false; // disappear component
      // setTimeout (() => this.active= true,0); // call fresh component
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.newNote); }


@Input() reciever: any;
  ngOnChanges(changes: SimpleChange) {
    // console.log("something is changed")
    // console.log(changes)
    // console.log(this.reciever)
    // console.log("Opening form...")

    //open form
    this.active = true;
  }

}
