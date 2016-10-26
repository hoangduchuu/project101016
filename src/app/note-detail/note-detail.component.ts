import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/services/firebase.service';
import { SendEmailService } from '../shared/services/send-email.service';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})



export class NoteDetailComponent implements OnInit {
  noteid;
  brick;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private sendEmailService: SendEmailService
  ) {
    console.log('constructor working....')
    this.noteid = this.route.snapshot.params['noteid'];
    this.sub = this.firebaseService.getNote(this.noteid).subscribe( note => {
      return this.brick = note;
    });
  }
  sub:any;
  ngOnInit () {

  }


  ngOnDestroy() {
    console.log(this.brick)
    this.sub.unsubscribe();
  }


  backHome() {
    this.router.navigate(['/']);
    // window.history.back();
  }

  sendEmail() {
    this.sendEmailService.sendEmail('ahihi').subscribe(
                               res => console.log(res), //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

}
