import { Component } from '@angular/core';
import PLANETS_FACTS from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly navBarElements = PLANETS_FACTS.map(planet => planet.name);
  activePlanet = PLANETS_FACTS[0];

  constructor() {}

  planetSelect(planetName: string) {
    this.activePlanet = PLANETS_FACTS.find(planet => planet.name === planetName) || PLANETS_FACTS[0];
  }
}
