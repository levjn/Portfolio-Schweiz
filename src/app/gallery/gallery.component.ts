import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";


@Component({
  selector: 'app-gallery',
  standalone: true,
    imports: [
        CarouselModule,
        TagModule,
        Button
    ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
