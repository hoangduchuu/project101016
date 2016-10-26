import { Component, OnInit } from '@angular/core';
import { GoogleDocsService } from '../../shared/services/googleDocs.service';
import { DocsService } from '../../shared/services/docs.service';
import { GoogleFormService } from '../../shared/services/google-form.service';
import { Form } from '../../shared/models/form';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'create-form-angel',
  templateUrl: './create-form-angel.component.html',
  styleUrls: ['./create-form-angel.component.css']
})


export class CreateFormAngelComponent implements OnInit {
  newForm:any ;

  name="";
  email="";
  phone="";
  facebook = "";
  type = "Sinh Viên";
  address = "";
  school = "";

 constructor(
   private googleFormService: GoogleFormService
  ) {

 }
 angelActive = true;
 ngOnInit() {

 }


 saveAndSend(model, valid ) {
   console.log(model, valid)
   // using payload very special for angular 2 x-www-form/urlencoded
   let payload = new URLSearchParams();
   payload.set('entry.525088192', model.name );
   payload.set('entry.496228367', model.email);
   payload.set('entry.264189850', model.phone );
   payload.set('entry.862093949', model.facebook );
   payload.set('entry.591547068', model.type);
   payload.set('entry.246536080', model.address );
   payload.set('entry.644002746', model.school );
   console.log(payload)
   this.googleFormService.sendForm(payload).subscribe(
                                res => {
                                    // Emit list event
                                    console.log(res);
                                },
                                err => {
                                    // Log errors if any
                                    console.error(err);
                                });;

  this.angelActive = false;
 }

 // TODO: Remove this when we're done
 get diagnostic() { return JSON.stringify(this.newForm); }


}
