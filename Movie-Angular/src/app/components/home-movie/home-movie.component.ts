import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interface/baseData-movie';
import { MovieServiceService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.css']
})
export class HomeMovieComponent implements OnInit {

  movies: Movies[] = []


  constructor(private _movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void {
    this._movieService.getMovies()
      .subscribe(movies => this.movies = movies.results);
  }

}
