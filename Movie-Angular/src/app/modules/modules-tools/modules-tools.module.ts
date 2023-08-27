import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchMovieComponent } from '../search-movie/search-movie.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchMovieComponent
  ],

  imports: [
    CommonModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],

  exports:[
   HeaderComponent, FooterComponent, SearchMovieComponent
  ]
})


export class ModulesToolsModule { }
