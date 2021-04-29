import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  [x: string]: any;
  popularList: Array<any>;
  theatersList: Array<any>;
  topRatedList: Array<any>;
  searchRes: Array<any>;
  searchStr: string;
  page: number;
  total: number;
  option:string;

  constructor(private _moviesService: MoviesService) {
    this.page = 1;
  }
  ngOnInit() {



    this._moviesService.getTopRatedMovies(this.page).subscribe(res => {
      this.topRatedList = res.results.slice(0,18);
      // this.searchbyPage(this.page);
    });
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results.slice(0, 18);
    });
    this._moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });

  }
  searchMovies() {
    this._moviesService.searchMovies(this.searchStr, this.option).subscribe(res => {
      this.searchRes = res.results;
    })
  }

  slides = [
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  ];


}
