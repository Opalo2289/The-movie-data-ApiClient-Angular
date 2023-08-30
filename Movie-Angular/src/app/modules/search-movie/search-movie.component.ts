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
  searched = false;





  constructor(private _movieService: MovieService) { };

  ngOnInit(): void {

    this.getMovies(this.page)
    this.setupSearchAndPaginationObservable();
  };


  getMovies(page: number): void {
    this.movies$ = this._movieService.getMovies(page)
  };


  search(term: string): void {
    console.log('search', term)
    this.searchTerms.next(term);
  }


  setupSearchAndPaginationObservable(): void {
    this.movies$ = this.searchTerms.pipe(
      startWith(''), // Mostrar películas desde el principio
      debounceTime(300),
      switchMap((term: string) => {
        // Reiniciar la página al realizar una nueva búsqueda
        this.term = term; // Actualizar el término de búsqueda
        if (term === '') {
          if(this.searched){
            this.page = 1;
            this.searched = false;
          }
            return this._movieService.getMovies(this.page);
          } else {
            if(!this.searched){
              this.page = 1;
            }
            this.searched = true;
            return this._movieService.searchMovies(term, this.page);
          }
        })    
      );
  };


  onPageChange(e: PageEvent): void {
    this.page = e.pageIndex + 1;
    this.searchTerms.next(this.term); // Usa el término de búsqueda actual
  }

};
