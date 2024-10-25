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
    products: any = [
        {
            name: "Basel inner City, Basel",
            image: "basel_stadt.jpg"
        },
        {
            name: "Bern Mountains, Berne",
            image: "berner_oberland.jpg"
        },
        {
            name: "Graubünden, Graubünden",
            image: "graubuenden.jpg"
        },
        {
            name: "Andermatt Gondola, Uri",
            image: "andermatt.jpg"
        }
        ,
        {
            name: "Campione d'italia, Tessin",
            image: "campione_d_itialia.jpg"
        }
        ,
        {
            name: "Lake of Cauma, Graubünden",
            image: "caumasee.jpg"
        }
        ,
        {
            name: "Swiss Alps, Switzerland",
            image: "alpenblick.jpg"
        }
        ,
        {
            name: "Trümmelbachfälle, Berne",
            image: "truemmelbachfaelle.jpg"
        },
        {
            name: "Lake of Vierwaldstätter, Lucerne",
            image: "vierwaldstaettersee.jpg"
        }
    ]
}
