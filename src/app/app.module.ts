import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { NameListComponent } from './name-list/name-list.component';
import { HeaderComponent } from './header/header.component';
import { SortPipe } from './pipes/sort.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameListComponent,
    HeaderComponent,
    SortPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
