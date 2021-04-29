import { Component, OnInit,Input } from '@angular/core';
import {MoviesService} from '../../movies.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  movies: Array<Object>;

  genres: Array<Object>;

  constructor(private _moviesService: MoviesService) {




  }

  ngOnInit() {
  }








}
