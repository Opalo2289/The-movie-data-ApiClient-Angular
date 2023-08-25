import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/baseData-movie';
import { MovieService } from 'src/app/services/movie.service';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, startWith, switchMap
} from 'rxjs/operators';

import { ApiResponse } from 'src/app/interface/apiResponse-movie';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.css']
})
export class HomeMovieComponent implements OnInit {

  moviesArray: Movies[] = []


  // constructor(private _movieService: MovieService) { }

  // ngOnInit(): void {
  //   this.getMovies()
  // }

  // getMovies(): void {
  //   this._movieService.getMovies()
  //     .subscribe(movies => this.movies = movies.results);
  // }

  movies$!: Observable<ApiResponse<Movies>>;
  private searchTerms = new Subject<string>();


  constructor(private _movieService: MovieService) { };

  getMovies(): void {
    this.movies$ = this._movieService.getMovies()
      // .subscribe(moviesOne => this.moviesArray = moviesOne.results);
  }


  search(term: string): void {
    this.searchTerms.next(term);
  };


  ngOnInit(): void {

    this.getMovies()

    this.movies$ = this.searchTerms.pipe(

      startWith(''), // Mostrar películas desde el principio
     
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._movieService.searchMovies(term))
    );
  };

};
