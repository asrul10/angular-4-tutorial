import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then((heroes) => this.heroes =  heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goEdit(): void {
    this.router.navigate(['/edit', this.selectedHero.id]);
  }
}
