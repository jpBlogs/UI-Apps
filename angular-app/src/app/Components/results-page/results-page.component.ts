import { Filter } from './../../Models/FiltersData';
import { Router } from '@angular/router';
import { Result } from './../../Models/ResultsData';
import { DataService } from './../../Services/data-service/data-service.service';
import {FiltersService} from '../../Services/filters-service/filters-service.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  results: Result[] = [];
  filters: Filter[] = [];

  constructor(private _dataService: DataService,
    private _filterService: FiltersService,
    private _location: Location,
    private _router: Router) { }

  ngOnInit() {
    this.updateResultsPage();
  }

  updateResultsPage() {
    this.filters = this._filterService.GetFilters();
    this._dataService.GetResults(this.filters)
      .then(results => this.results = results)
      .catch(this.handleError);
  }

  goToDetails(id) {
    this._router.navigate(['/details', id]);
  }

  goBack() {
    this._location.back();
  }

  /**
   * Handle errors from the requests
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
