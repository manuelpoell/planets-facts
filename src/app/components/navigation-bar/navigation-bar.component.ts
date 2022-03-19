import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Input() elements: Array<string> = [];
  @Input() active: any = {};
  @Output() selectionChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  elementClicked(selected: string) {
    this.selectionChange.emit(selected);
  }

}
