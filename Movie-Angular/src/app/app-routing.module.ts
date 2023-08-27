import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'home', component:HomeMovieComponent }, 
  { path: 'home', component: HomeMovieComponent},
  { path: 'detalle', loadComponent: () => import ('./components/detail-movie/detail-movie.component').then(mod => mod.DetailMovieComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
