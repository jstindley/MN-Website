import {Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';

export const APP_ROUTES : Routes = [
    { path: 'episodes', component: EpisodesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'shop', component: ShopComponent },
    { path: '**', component: HomePageComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES)