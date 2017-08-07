import { Result } from './../../Models/ResultsData';
import { DataService } from './../../Services/data-service/data-service.service';
import {ParamMap, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  result: Result = null;
  selectedTab: number = 1;

  constructor(private _dataService: DataService,
    private _location: Location,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap
    .switchMap((params: ParamMap) => this._dataService.GetResultsById(+params.get('id')))
    .subscribe(result => this.result = result);
  }

  changeTab(id: number){
    this.selectedTab = id;
  }

  goBack() {
    this._location.back();
  }
}
