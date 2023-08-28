import { Component, OnInit } from '@angular/core';



import { MovieService } from 'src/app/services/movie.service';
import { Movies } from 'src/app/interface/baseData-movie';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, isEmpty, startWith, switchMap
} from 'rxjs/operators';

import { ApiResponse } from 'src/app/interface/apiResponse-movie';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {


  movies$!: Observable<ApiResponse<Movies>>;
  private searchTerms = new Subject<string>();
  public page: number = 1;
  private term: string = ""
  length = 10000;
  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;



  constructor(private _movieService: MovieService) { };

  ngOnInit(): void {

    this.getMovies(this.page)
    this.setupSearchObservable();
  
  };


  getMovies(page: number): void {
    this.movies$ = this._movieService.getMovies(page)
  };


  search(term: string): void {
    this.term = term
    console.log('busqueda term', this.term)
    this.searchTerms.next(this.term);
  };


  setupSearchObservable(): void {
    this.movies$ = this.searchTerms.pipe(
      startWith(''), // Mostrar películas desde el principio
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._movieService.searchMovies(term, this.page))
    );
  };


  // onPageChange(e: PageEvent, term: string): void {
  //   console.log("page", e)
  //   this.page = e.pageIndex + 1;
  //   this.searchTerms.next(term);
  // };


  onPageChange(e: PageEvent): void {
    console.log("page", e);
    console.log('term vacío', this.term);

    if (this.term == "") {
      this.page = e.pageIndex + 1;
      this.getMovies(this.page);
    
    } else {
      
      this.searchTerms.next(this.term);
      
    }
  }

};
