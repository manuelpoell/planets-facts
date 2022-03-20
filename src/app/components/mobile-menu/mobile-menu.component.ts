import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanetInfo } from 'src/app/models/planet-info.models';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() elements: Array<PlanetInfo> = [];
  @Input() active: PlanetInfo = {};
  @Output() selectionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  elementClicked(selected: string|undefined) {
    this.selectionChange.emit(selected);
  }

}
