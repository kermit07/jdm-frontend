import { Routes, RouterModule } from '@angular/router';

import {NotFoundComponent} from "./components/not-found/not-found.component";
import {OfferCreatorComponent} from "./components/offer-creator/offer-creator.component";
import {ArtistProfileComponent} from "./components/artist-profile/artist-profile.component";
import {ClientSearchComponent} from "./components/client-search/client-search.component";
import {OfferSearchComponent} from "./components/offer-search/offer-search.component";
import {MainPageComponent} from "./components/main-page/main-page.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'offer_search', component: OfferSearchComponent},
  {path: 'client_saerch', component: ClientSearchComponent},
  {path: 'artist/:id', component: ArtistProfileComponent},
  {path: 'offer_creator', component: OfferCreatorComponent},
  {path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
