import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMovieComponent,
    DetailsMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
