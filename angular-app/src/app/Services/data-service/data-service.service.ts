import { Result } from './../../Models/ResultsData';
import { Filter } from './../../Models/FiltersData';
import { Observable } from 'rxjs';
import { SuggestionsData } from './../../Models/SuggestionsModels';
import {Http} from '@angular/http';
import { QuicklinkData } from './../../Models/QuicklinksModels';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private data;

  constructor(private http: Http) {

  }

  //*************** Public Methods *****************************
  /**
   * Get quicklinks
   */
  public GetQuicklinks(type: string): Promise<QuicklinkData> {
    return this.http.get('/assets/mock_data.json')
             .toPromise()
             .then(response => this.extractQuicklinksData(type, response.json()))
             .catch(this.handleError);
  }

  /**
   * Get autocomplete suggestions
   */
  public GetSuggestions(text: string): Observable<SuggestionsData[]> {
    return this.http.get('/assets/mock_data.json')
             .map(response => this.extractSuggestions(text, response.json()))
             .catch(this.handleError);
  }

  /**
   * Get results matching the filters
   */
  public GetResults(filters: Filter[]): Promise<Result[]> {
    return this.http.get('/assets/mock_data.json')
             .toPromise()
             .then(response => this.extractResults(filters, response.json()))
             .catch(this.handleError);
  }

  /**
   * Gets result matching the id
   */
  public GetResultsById(id: number): Promise<Result> {
    return this.http.get('/assets/mock_data.json')
             .toPromise()
             .then(response => this.extractResultById(id, response.json()))
             .catch(this.handleError);
  }

  //*************** Private Methods *****************************
  /**
   * Extract quicklinks from the mock data
   */
  private extractQuicklinksData (type: string, data): QuicklinkData {
    let quicklinkData: QuicklinkData = new QuicklinkData();
    let header: string = '';
    let links: string[] = [];
    data.forEach(function(element) {
        if(links.indexOf(element[type]) < 0 && links.length <= 10) {
            links.push(element[type]);
        }
    }, this);
    switch(type){
        case 'state': header = 'State'; break;
        case 'city': header = 'City'; break;
        case 'eye_color': header = 'Eye Color'; break;
        case 'language': header = 'Language'; break;
        default: break;
    }
    quicklinkData.header = header;
    quicklinkData.links = links;
    return quicklinkData;
  }

  /**
   * Extract autocomplete suggestions from the mock data
   */
  private extractSuggestions (text: string, data): SuggestionsData[] {
    let suggestionsData: SuggestionsData[] = [];
    let internal_name: string = 'full_name';
    let suggestions: string[] = [];
    data.forEach(function(element) {
        if(element[internal_name].toLowerCase().indexOf(text.toLowerCase()) >= 0) {
            let suggestion: SuggestionsData = new SuggestionsData();
            suggestion.internal_name = internal_name;
            suggestion.text = element[internal_name];
            suggestionsData.push(suggestion);
        }
    }, this);
    return suggestionsData;
  }

  /**
   * Extract autocomplete suggestions from the mock data
   */
  private extractResults (filters: Filter[], data): Result[] {
    let results: Result[]= [];
    filters.forEach(function(filter) {
        data.forEach(function(element) {
            if(element[filter.internal_name] === filter.value) {
                if(results.indexOf(element) < 0){
                    results.push(element);
                }
            }
        }, this);
    });
    return results as Result[];
  }

  /**
   * Extract the result from data matching the id
   */
  private extractResultById (id: number, data): Result {
    let results: Result[]= [];
    for(var i=0; i<data.length; i++){
        var element = data[i];
        if(element.id === id){
            return element as Result;
        }
    }
    return null;
  }

  /**
   * Handle errors from the requests
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
