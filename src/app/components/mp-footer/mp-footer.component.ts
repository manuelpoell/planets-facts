import { Component, Input, OnInit } from '@angular/core';
import { PlanetInfo } from 'src/app/models/planet-info.models';

@Component({
  selector: 'mp-footer',
  templateUrl: './mp-footer.component.html',
  styleUrls: ['./mp-footer.component.scss']
})
export class MpFooterComponent implements OnInit {

  @Input() active: PlanetInfo = {};

  constructor() {}

  ngOnInit(): void {}

}
