import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesCardComponent } from './heroes-card/heroes-card.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HeroesCardComponent
  },
  {
    path: 'heroes',
    component: HeroesListComponent
  },
  {
    path: 'edit/:id',
    component: HeroEditComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
