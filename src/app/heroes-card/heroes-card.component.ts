import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(0, 6));
  }
}
