import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeMovieComponent},
  { path: 'detalle', component: DetailMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
