import { Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {HistoryComponent} from "./history/history.component";
import {SightseeingComponent} from "./sightseeing/sightseeing.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {path: 'gallery', component: GalleryComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'sightseeing', component: SightseeingComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: '', component: HomeComponent},
];
