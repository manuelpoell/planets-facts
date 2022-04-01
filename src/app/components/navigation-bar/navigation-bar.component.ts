import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanetInfo } from 'src/app/models/planet-info.models';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Input() elements: Array<PlanetInfo> = [];
  @Input() active: PlanetInfo = {};
  @Output() selectionChange = new EventEmitter<string>();
  @Output() openMenu = new EventEmitter<void>();

  navBarElements: Array<string|undefined> = [];
  menuIsOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.navBarElements = this.elements.map(planet => planet.name);
  }

  elementClicked(selected: string|undefined) {
    this.selectionChange.emit(selected);
  }

  triggerMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
    this.openMenu.emit();
  }

}
