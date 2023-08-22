import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModulesToolsModule } from './modules/modules-tools/modules-tools.module';

import { AppComponent } from './app.component';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';






@NgModule({
    declarations: [
        AppComponent,
        HomeMovieComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesToolsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
