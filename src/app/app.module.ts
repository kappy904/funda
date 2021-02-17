import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {DataComponent} from '../components/data/data.component';
import {HttpClientModule} from '@angular/common/http';
import {MediaItemsComponent} from '../components/media-items/media-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    MediaItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
