import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'popup-note',
  templateUrl: './popup-note.component.html',
  styleUrls: ['./popup-note.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopupNoteComponent implements OnInit {

  constructor(
      public af: AngularFire,
      private elementRef:ElementRef
  ) {
  // document.addEventListener('click', this.offClickHandler.bind(this));
 }

  ngOnInit() {
  }

 eventCreateForm;
 createForm(event) {
   // console.log(event)
   this.eventCreateForm = event
 }
//
// @ViewChild('popup-window') targetField;
//
// offClickHandler(event:any) {
//         if (!this.targetField.nativeElement.contains(event.target)) { // check click origin
//             console.log('hi there')
//         }
//     }


}
