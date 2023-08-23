import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../interface/baseData-movie';
import { ApiResponse } from '../interface/apiResponse-movie';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private moviesUrl = 'https://api.themoviedb.org/3/discover/movie?&api_key=859b9a5b3fb8156847720994bdacd732';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) { }


  getMovies(): Observable<ApiResponse<Movies>> {
    return  this._http.get<ApiResponse<Movies>>(this.moviesUrl)
  }
}
