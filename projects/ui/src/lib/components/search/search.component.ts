import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Array<any>;
  searchRes: Array<any>;
  searchStr: string;
  genres: Array<any>;
  discoverList: Array<any>;
  year: String;
  type:String;
  type1: String;
  page: number;



  constructor(private _moviesServices: MoviesService, private _moviesService: MoviesService) {
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
    this.page = 1;
  }

  ngOnInit() {
  }

  getMovies() {
    this._moviesService.discoverMovies(this.year, this.type, this.type1, this.page).subscribe(res => {

      this.discoverList = res.results.slice(0, 18);
      // this.searchbyPage(this.page);

    });
  }

  searchbyPage(pageArg: number) {
   /*this.discoverList = res.results.slice(0, 18);*/
  }

  goPage(go: number) {
    let newPage = this.page + go;
    this.page = newPage;
    // this.page = this.page+1;
    this.searchbyPage(newPage);
    console.log("STRONA "+ this.page);


  }


}


///////stad

