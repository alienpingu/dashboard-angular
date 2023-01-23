import { Component, Input } from '@angular/core';
import { Bookmark } from './template/bookmark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() activePage: string = 'add';
  bookmarkList: Bookmark[] = [
    {
      title: 'Google',
      image: 'https://www.seo-suedwest.de/images/google-suchefeld.png',
      url: 'https://www.google.com/',
    },
  ];
  onNewItem(newItem: string) {
    this.activePage = newItem;
  }
}
