import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { of, Observable } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = of(HEROES.find((hero) => hero.id === id)!);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
}
