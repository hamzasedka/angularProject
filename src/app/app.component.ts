import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Project';
  user:any;
  ngOnInit(){
    this.user=  JSON.parse(localStorage.getItem('user'));

  }
}
