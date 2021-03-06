import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  reviews: Array<any>;
  similarMovies: Array<any>;
  cast: Array<any>;
  video: any;
  title: string;
  movies: any;
  constructor(
    private _moviesServices: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;

      });
      this._moviesServices.getMovieReviews(id).subscribe(res => {
        this.reviews = res.results;
      });
      this._moviesServices.getMovieCredits(id).subscribe(res => {
        res.cast = res.cast.filter((item) => {return item.profile_path});
        this.cast = res.cast.slice(0,4);
      });
      this._moviesServices.getMovieVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
      this._moviesServices.getSimilarMovies(id).subscribe(res => {
        console.log(res.results);

        this.similarMovies = res.results.slice(0, 12);
      });
    })
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.title = params['name'];
      this._moviesServices.getMoviesByGenre(id).subscribe(res => {
        this.movies = res.results;
      });
    })


  }

  addMovie(){
   let moviee:string;
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        moviee = movie;

      });
    this._moviesServices.addMovieToFireBase(this.movie);
  })
}

}
