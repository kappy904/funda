import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {DataComponent} from './components/data/data.component';
import {HttpClientModule} from '@angular/common/http';
import {MediaItemsComponent} from './components/media-items/media-items.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {HeroComponent} from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CallComponent } from './components/call/call.component';
import { EnquireNowComponent } from './components/enquire-now/enquire-now.component';
import { TwoColHalfComponent } from './layout/two-col-half/two-col-half.component';
import { TwoColSeventyThirtyComponent } from './layout/two-col-seventy-thirty/two-col-seventy-thirty.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OneColContainerComponent } from './layout/one-col-container/one-col-container.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MediaItemsComponent,
    WelcomeComponent,
    GoogleMapComponent,
    HeroComponent,
    HeaderComponent,
    OverviewComponent,
    CallComponent,
    EnquireNowComponent,
    TwoColHalfComponent,
    TwoColSeventyThirtyComponent,
    LoaderComponent,
    OneColContainerComponent,
    DetailsComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBC-k5uk4zamchOXB30-wadws_qMrHJ25s'
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
