import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesToolsModule } from 'src/app/modules/modules-tools/modules-tools.module';



@Component({
  selector: 'app-detail-movie',
  standalone: true,
  imports: [CommonModule, ModulesToolsModule],
  template: `

  
  <app-header></app-header>

  <body>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
      <div class="container">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src="https://es.web.img3.acsta.net/medias/nmedia/18/67/71/17/20027466.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-5 content black-font">
            <h2  class="black-font">Professional Photographer from New York</h2>
            <p class="fst-italic py-3 black-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            <p class="m-0">
              Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis.
              Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <app-footer></app-footer>

  </body>
   
   
  `,
  styleUrls: ['./detail-movie.component.css'],
})
export class DetailMovieComponent {

}
