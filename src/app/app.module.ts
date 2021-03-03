import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DataComponent } from './components/data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaItemsComponent } from './components/media-items/media-items.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CallComponent } from './components/call/call.component';
import { EnquireNowComponent } from './components/enquire-now/enquire-now.component';
import { TwoColHalfComponent } from './layout/two-col-half/two-col-half.component';
import { TwoColSeventyThirtyComponent } from './layout/two-col-seventy-thirty/two-col-seventy-thirty.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OneColContainerComponent } from './layout/one-col-container/one-col-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MediaItemsComponent,
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
    FooterComponent,
    DetailsPageComponent,
  ],
  imports: [
    // this will be removed after 1 week
    // it is required to get my google map working
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    DeferLoadModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
