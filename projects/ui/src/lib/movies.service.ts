import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactUs } from 'common/Model/ContactUs';


@Injectable()
export class MoviesService {
  apikey: string;

  constructor(
    private http:HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,  ){
    this.apikey = 'api_key=fed69657ba4cc6e1078d2a6a95f51c8c';


  }


  private packageDataSource = new BehaviorSubject<any>(undefined);
  public _packageData: Observable<any> = this.packageDataSource.asObservable();



  getMoviesByYear(year: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=' + year + '&'+this.apikey )


  }

  getMoviesByGenre(id: string) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/genre/' + id + '/movies?'+this.apikey );

  }
  getPopular():Observable<any> {
    var search = new URLSearchParams();

    return this.http.get('https://api.themoviedb.org/3/discover/movie?'+this.apikey )

  }

  getInTheaters():Observable<any> {


    return this.http.get('https://api.themoviedb.org/3/discover/movie?'+this.apikey )

  }

  getTopRatedMovies(page: number) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/discover/movie?'+this.apikey+'&sort_by=vote_average.desc&page=' + page, )

  }
  getLatestMovies() :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/movie/latest?'+this.apikey )

  }
  searchMovies(searchStr: string, option:string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/search/movie?'+this.apikey+'&query='+searchStr )

  }

  searchActors(searchStr: string):Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/search/person?'+this.apikey )


  }

  getMovie(id: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?'+this.apikey)

  }

  getGenres():Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?'+this.apikey )

  }
  discoverMovies(option: String, option2: String, option3: String, page:number):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/discover/movie?&primary_release_year=' + option + '&' + option2 +'&'+ 'with_genres=' + option3+'&page='+page+'&'+this.apikey )

  }


  getMovieReviews(id: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?'+this.apikey )

  }
  getMovieVideos(id: string) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?'+this.apikey )

  }

  getSimilarMovies(id: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/similar?'+this.apikey )

  }

  getMovieCredits(id: string) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?'+this.apikey )

  }

  getUpComingMovies() :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?'+this.apikey )

  }
  getPopularSeries() :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/tv/popular?'+this.apikey )

  }

  getTopRatedSeries():Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?'+this.apikey )

  }

  getSerieDetails(id: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '?'+this.apikey )

  }

  getSerieVideos(id: string):Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/videos?'+this.apikey )

  }

  getPersonDetail(id: string) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/person/' + id + '?'+this.apikey )

  }

  getPersonCast(id: string) :Observable<any>{

    return this.http.get('https://api.themoviedb.org/3/person/' + id + '/movie_credits?'+this.apikey )

  }

  addMovieToFireBase(movie:any){
    let uid= JSON.parse(localStorage.getItem('user')).uid;
    this.afs.collection("users/"+uid+"/movies").add(movie)
    .then(()=>console.log("movie added successfuy !!"))
    .catch((error) => {
      console.error("Error updating movie: ", error);
      }
    )};

    getMovieToFireBase():Observable<any>{
      let uid= JSON.parse(localStorage.getItem('user')).uid;
    return this.afs.collection("users/"+uid+"/movies").valueChanges();


      }

      deleteMovie(id:string){
        let uid= JSON.parse(localStorage.getItem('user')).uid;
     let doc= this.afs.firestore
      .collection("users/"+uid+"/movies")
      .where('id','==',id).get();
        doc.then(movies=>movies.forEach(movie=>movie.ref.delete()));
      }

      SendContactUs(contact:ContactUs){
        let uid= JSON.parse(localStorage.getItem('user')).uid;
        this.afs.collection("users/"+uid+"/contactUs").add(contact)
        .then(()=>console.log("message send successfuy !!"))
        .catch((error) => {
          console.error("Error sneding message: ", error);
          }
        )
      }
}
