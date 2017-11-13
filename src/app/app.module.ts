import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {DataService} from "./services/data.service";
import {TagService} from "./services/tag.service";

import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {UserComponent} from './components/user/user.component';
import {AboutComponent} from './components/about/about.component';
import {TagsManagerComponent} from './components/tags-manager/tags-manager.component';
import {ArtistProfileComponent} from './components/artist-profile/artist-profile.component';
import {ArtistCreatorComponent} from './components/artist-creator/artist-creator.component';
import {ArtistEditorComponent} from './components/artist-editor/artist-editor.component';
import {ArtistTupleComponent} from './components/artist-tuple/artist-tuple.component';
import {OfferSearchComponent} from './components/offer-search/offer-search.component';
import {ClientSearchComponent} from './components/client-search/client-search.component';
import {ClientCreatorComponent} from './components/client-creator/client-creator.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { ArtistGridComponent } from './components/artist-grid/artist-grid.component';
import { OfferGridComponent } from './components/offer-grid/offer-grid.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'offer_search', component: OfferSearchComponent},
  {path: 'client_saerch', component: ClientSearchComponent},
  {path: 'artist_creator', component: ArtistCreatorComponent},
  {path: 'artist/:id', component: ArtistProfileComponent},
  {path: 'client_creator', component: ClientCreatorComponent},
  {path: 'offer_creator', component: OfferSearchComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    TagsManagerComponent,
    ArtistProfileComponent,
    ArtistCreatorComponent,
    ArtistEditorComponent,
    ArtistTupleComponent,
    MainPageComponent,
    OfferSearchComponent,
    ClientSearchComponent,
    ClientCreatorComponent,
    NotFoundComponent,
    ArtistGridComponent,
    OfferGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
