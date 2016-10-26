import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'popup-angel',
  templateUrl: './popup-angel.component.html',
  styleUrls: ['./popup-angel.component.css']
})
export class PopupAngelComponent implements OnInit {
  
  constructor(
      public af: AngularFire
  ) { }


  ngOnInit() {
  }

  becomeAngel(){}

}
