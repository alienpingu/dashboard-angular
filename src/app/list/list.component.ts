import { Component, Input } from '@angular/core';
import { Bookmark } from '../template/bookmark';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list: Bookmark[] = [
    {
      title: 'Google',
      image: 'https://www.seo-suedwest.de/images/google-suchefeld.png',
      url: 'https://www.google.com/',
    },
    {
      title: 'Wikipedia',
      image:
        'https://static.iphoneitalia.com/wp-content/uploads/2021/03/Wikipedia-logo1.jpg',
      url: 'https://it.wikipedia.org/wiki/',
    },
  ];
}
