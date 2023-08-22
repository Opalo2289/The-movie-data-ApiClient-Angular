import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesToolsModule } from 'src/app/modules/modules-tools/modules-tools.module';




@Component({
  selector: 'app-detail-movie',
  standalone: true,
  imports: [CommonModule, ModulesToolsModule],
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
  
})
export class DetailMovieComponent {

}
