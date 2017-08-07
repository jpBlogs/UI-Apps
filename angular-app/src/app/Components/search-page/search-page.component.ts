import { FiltersService } from './../../Services/filters-service/filters-service.service';
import { RouterModule, Router } from '@angular/router';
import { DataService } from './../../Services/data-service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  linksList: string[];

  constructor(private _filterService: FiltersService,
    private _router: Router) { }

  ngOnInit() {
    this.linksList = ['state',
    'city',
    'eye_color',
    'language'];
    this._filterService.ClearFilters();
  }

  goToResultsPage() {
    this._router.navigate(['/results']);
  }
}
