import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesCardComponent } from './heroes-card/heroes-card.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // Base Page Component
    AppComponent,

    // Feature Component
    HeroEditComponent,
    HeroesListComponent,
    HeroesCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
