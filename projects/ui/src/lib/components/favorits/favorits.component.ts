import { Observable } from 'rxjs';
import { MoviesService } from './../../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class favoritsComponent implements OnInit {
  constructor(private _moviesServices:MoviesService) { }
  movies:Array<any>;
  ngOnInit() {

    this._moviesServices.getMovieToFireBase().subscribe(
        movies=>this.movies=movies



        );



  }
deleteMovie(id:string){
  if(confirm("Are you sure to delete ?")) {

this._moviesServices.deleteMovie(id);
}
}
}
