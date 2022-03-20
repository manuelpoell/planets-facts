import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionButton } from '../button-group/button-group.component';

@Component({
  selector: 'mobile-button-group',
  templateUrl: './mobile-button-group.component.html',
  styleUrls: ['./mobile-button-group.component.scss']
})
export class MobileButtonGroupComponent implements OnInit {

  @Input() buttons: Array<ActionButton> = [];
  @Input() activeColor: string|undefined = '';
  @Output() clicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  onClick(index: number) {
    this.clicked.emit(index);
  }

}
