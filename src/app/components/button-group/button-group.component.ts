import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionButton } from 'src/app/models/action-button.models';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  @Input() buttons: Array<ActionButton> = [];
  @Input() activeColor: string|undefined = '';
  @Output() clicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  onClick(index: number) {
    this.clicked.emit(index);
  }

}
