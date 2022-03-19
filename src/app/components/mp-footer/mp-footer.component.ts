import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mp-footer',
  templateUrl: './mp-footer.component.html',
  styleUrls: ['./mp-footer.component.scss']
})
export class MpFooterComponent implements OnInit {

  @Input() active: any = {};

  constructor() {}

  ngOnInit(): void {}

}
