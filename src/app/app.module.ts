import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CardComponent } from './shared/card/card.component';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    AddComponent,
    CardComponent,
    UnderlineDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
