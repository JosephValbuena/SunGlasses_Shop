import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { Page404Component } from './components/page404/page404.component';

//swiper

import { SwiperModule } from 'swiper/angular';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PagosComponent,
    Page404Component,
    SlideshowComponent,
    TendenciasComponent,
    NuevosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
