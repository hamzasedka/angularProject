import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'projects/auth/src/public-api';
import {MoviesService} from '../../movies.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  movies: Array<Object>;

  genres: Array<Object>;

  constructor(private authService: AuthService) {




  }

  ngOnInit() {
  }
logout(){
  this.authService.SignOut();
}







}
