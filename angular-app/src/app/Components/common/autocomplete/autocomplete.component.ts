import { FiltersService } from './../../../Services/filters-service/filters-service.service';
import { SuggestionsData } from './../../../Models/SuggestionsModels';
import { DataService } from './../../../Services/data-service/data-service.service';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  model: string = '';
  autocompleteWidth: string = '';

  constructor(private _dataService: DataService,
    private _filterService: FiltersService) { }

  ngOnInit() {
  }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => term.length < 2 ? Observable.of([])
        : this._dataService.GetSuggestions(term));
  formatter = (x: {text: string}) => x.text;

  onSelect(event: any) {
    this._filterService.ClearFilters();
    this._filterService.AddFilter('', event.item.internal_name, event.item.text);
    this.onClick.emit();
  }
}
