import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';
import { ContactUs } from 'common/Model/ContactUs';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUs:ContactUs;
  form:FormGroup;

  constructor(private _moiveServices:MoviesService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:[""],
      subject:[""],
      message:[""]
    });
  }
  send(){

    this._moiveServices.SendContactUs(this.form.value);

  }
}
