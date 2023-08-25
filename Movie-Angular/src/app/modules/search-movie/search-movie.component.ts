import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/interface/baseData-movie';
import { ApiResponse } from 'src/app/interface/apiResponse-movie';



@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movies$!: Observable<ApiResponse<Movies>>
  private searchTerms = new Subject<string>()

  // public results: Movies[] = []

  constructor(private _movieService: MovieService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  };


  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._movieService.searchMovies(term))

    )

  //   this.movies$.subscribe({
  //     next: (response: ApiResponse<Movies>) => {
  //       this.results = response.results
  //     }
  //   }
  //   )
   };

};
