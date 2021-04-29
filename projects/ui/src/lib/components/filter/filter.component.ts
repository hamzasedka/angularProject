import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  person: any;
  genres: any;
  searchRes: Array<any>;
  searchStr: string;
  option:string;


  constructor(private _moviesService: MoviesService, private router: ActivatedRoute) { }

  ngOnInit() {

  }


  searchMovies() {
    this._moviesService.searchMovies(this.searchStr, this.option).subscribe(res => {
      this.searchRes = res.results;
    })
  }


}
