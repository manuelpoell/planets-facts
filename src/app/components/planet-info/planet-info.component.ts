import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActionButton } from 'src/app/models/action-button.models';
import { PlanetDescription } from 'src/app/models/planet-description.models';
import { PlanetInfo } from 'src/app/models/planet-info.models';

@Component({
  selector: 'planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 })),
      ])
    ])
  ]
})
export class PlanetInfoComponent implements OnInit {

  @Input() active: PlanetInfo = {};

  buttons: Array<ActionButton> = [
    {
      label: 'overview',
      mobileLabel: 'overview',
      active: true
    },
    {
      label: 'internal structure',
      mobileLabel: 'structure'
    },
    {
      label: 'surface geology',
      mobileLabel: 'surface'
    }
  ];

  activeImage: string = '';
  additionalImage: string = '';
  activeDescription: PlanetDescription = {};

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    // do not delay animation on mobile view
    if (window.innerWidth < 700) return this.changeView();
    this.loading = true;
    setTimeout(() => this.changeView(), 225);
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

    this.loading = false;
  }

}
