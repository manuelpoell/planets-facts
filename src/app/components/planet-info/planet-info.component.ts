import { Component, Input, OnInit } from '@angular/core';
import { PlanetDescription } from 'src/app/models/planet-description.models';
import { PlanetInfo } from 'src/app/models/planet-info.models';
import { ActionButton } from '../button-group/button-group.component';

@Component({
  selector: 'planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  @Input() active: PlanetInfo = {};

  buttons: Array<ActionButton> = [
    {label: 'overview', active: true},
    {label: 'internal structure'},
    {label: 'surface geology'}
  ];

  activeImage: string = '';
  additionalImage: string = '';
  activeDescription: PlanetDescription = {};

  readonly windowWidth: number = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
    if (this.windowWidth < 700) {
      this.buttons = [
        {label: 'overview', active: true},
        {label: 'structure'},
        {label: 'surface'}
      ];
    }
  }

  ngOnChanges(): void {
    this.changeView();
  }

  buttonClicked(index: number): void {
    this.buttons.forEach(btn => btn.active = this.buttons.indexOf(btn) === index);
    this.changeView();
  }

  private changeView(): void {
    const viewIndex = this.buttons.findIndex(btn => btn.active);

    switch (viewIndex) {
      case 0:
        this.activeImage = this.active.images?.planet || '';
        this.additionalImage = '';
        this.activeDescription = this.active.overview || {};
        break;
      case 1:
        this.activeImage = this.active.images?.internal || '';
        this.additionalImage = '';
        this.activeDescription = this.active.structure || {};
        break;
      case 2:
        this.activeImage = this.active.images?.planet || '';
        this.additionalImage = this.active.images?.geology || '';
        this.activeDescription = this.active.geology || {};
        break;
      default:
        this.activeImage = this.active.images?.planet || '';
        this.additionalImage = '';
        this.activeDescription = this.active.overview || {};
        break;
    }
  }

}
