import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelTopComponent } from './panel-top/panel-top.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { StarshipComponent } from './starship/starship.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelTopComponent,
    SearchFieldComponent,
    CharacterListComponent,
    PaginatorComponent,
    IndexComponent,
    DetailsComponent,
    StarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
