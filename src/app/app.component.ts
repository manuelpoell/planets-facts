import { Component } from '@angular/core';
import PLANETS_FACTS from '../assets/data.json';
import { PlanetInfo } from './models/planet-info.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly navBarElements: Array<PlanetInfo> = PLANETS_FACTS;

  activePlanet: PlanetInfo = PLANETS_FACTS[0];
  menuOpen: boolean = false;

  constructor() {}

  planetSelect(planetName: string): void {
    this.activePlanet = PLANETS_FACTS.find(planet => planet.name === planetName) || PLANETS_FACTS[0];
    this.menuOpen = false;
  }

  openMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
