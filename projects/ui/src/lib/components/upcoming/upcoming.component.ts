import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  movies: Array<any>;
  searchRes: Array<any>;
  searchStr: string;
  option:string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr, this.option).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
