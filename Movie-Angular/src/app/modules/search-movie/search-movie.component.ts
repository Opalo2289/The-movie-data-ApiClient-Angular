import { Component, OnInit } from '@angular/core';



import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/interface/baseData-movie';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, startWith, switchMap
} from 'rxjs/operators';

import { ApiResponse } from 'src/app/interface/apiResponse-movie';



@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {


  movies$!: Observable<ApiResponse<Movies>>;
  private searchTerms = new Subject<string>();


  constructor(private _movieService: MovieService) { };

  getMovies(): void {
    this.movies$ = this._movieService.getMovies()
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
