import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';
import { User } from 'common/Model/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User;
form:FormGroup;
path:string;
imageUrl:string;
  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute) {

     }

     upload($event){
      this.path=$event.target.files[0];

    }

  ngOnInit(): void {

this.intForm();
this.authService.retriveImageFromFirebase().then(
  url=>this.imageUrl=url

);


  }

  intForm(){
    this.form=this.formBuilder.group({
      displayName:[""],
      email:[""],
      phoneNumber:[""],
      website:[""],
      street:[""],
      city:[""],
      state:[""],
      zipcode:[""]
    })
    this.authService.getUserInfo().subscribe(user=>
      this.form.setValue(user)
      );
  }


  uploadImageToFirebase(){

    this.authService.uploadImage(this.path);
    setTimeout(() => {
      location.reload();
    }, 2);
  }

  update(){
this.authService.UpdateUserInfo(this.form.value);

}

}
