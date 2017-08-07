import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { ResultsPageComponent } from './Components/results-page/results-page.component';
import { QuicklinksComponent } from './Components/search-page/quicklinks/quicklinks.component';
import { AutocompleteComponent } from './Components/common/autocomplete/autocomplete.component';
import { DataService } from './Services/data-service/data-service.service';
import { FiltersService } from './Services/filters-service/filters-service.service';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    AutocompleteComponent,
    QuicklinksComponent,
    ResultsPageComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'results',
        component: ResultsPageComponent
      },
      {
        path: 'details/:id',
        component: DetailsPageComponent
      }
    ]),
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
