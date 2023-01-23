import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() activePage: string = 'list';
  title: string = 'Bookmarks';
  changeRoute(value: string) {
    this.newItemEvent.emit(value);
  }
}
