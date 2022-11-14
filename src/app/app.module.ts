import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingComponent } from './trending/trending.component';
import { GameCardComponent } from './game-card/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottonInfoComponent } from './botton-info/botton-info.component';
import { TopSalesComponent } from './top-sales/top-sales.component';
import { ReleasesComponent } from './releases/releases.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    TrendingComponent,
    GameCardComponent,
    BottonInfoComponent,
    TopSalesComponent,
    ReleasesComponent,
    BannerComponent,
    HomeComponentComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
