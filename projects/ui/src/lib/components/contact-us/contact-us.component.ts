import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { ContactUs } from 'common/Model/ContactUs';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'lib-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUs:ContactUs;
  name:string;
  subject:string;
  message:string;

  constructor(private _moiveServices:MoviesService) { }

  ngOnInit(): void {

  }
  send(){

    this.contactUs.name=this.name;
    this.contactUs.subject=this.subject;
    this.contactUs.message=this.message;
console.log(this.contactUs.name);

    this._moiveServices.SendContactUs(this.contactUs);

  }
}
