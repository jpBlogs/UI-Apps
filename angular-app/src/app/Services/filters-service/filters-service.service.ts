import { Filter } from './../../Models/FiltersData';
import { Injectable } from '@angular/core';

@Injectable()
export class FiltersService {

  constructor() { }

  //***********Public Methods*************/

  /**
   * Get all filters
   */
  public GetFilters(): Filter[] {
    return this.getItemFromLocalStorage('filters') as Filter[];
  }

  /**
   * Add a new filter to the filter list
   */
  public AddFilter(display_name: string, internal_name: string, value: string) {
    var filters =  this.getItemFromLocalStorage('filters');
    if(filters === null){
      filters = [];
    }
    filters.push({ 'display_name': display_name, 'internal_name': internal_name, 'value': value });
    this.addItemToLocalStorage('filters', filters);
  }

  /**
   * Get a filter by name from the filter list
   */
  public GetFilter(internal_name: string): Filter {
    var filters =  this.getItemFromLocalStorage('filters');
    for(var i=0; i<filters.length; i++){
        var filter = filters[i];
        if(filter.internal_name === internal_name){
            return filter as Filter;
        }
    }
    return null;
  }

  /**
   * Clears all filters
   */
  public ClearAllFilters() {
    this.addItemToLocalStorage('filters', []);
  }

  //***********Private Methods*************/
  /**
   * Save item to local storage
   */
  private addItemToLocalStorage(name: string, value: any) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(value));
    } else {
        // Sorry! No Web Storage support..
    }
  }

  /**
   * Get item from local storage
   */
  private getItemFromLocalStorage(name: string) {
    if (typeof(Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(name));
    } else {
        // Sorry! No Web Storage support..
    }
  }

  /**
   * removeItemFromLocalStorage
   * Remove item from local storage
   */
  private removeItemFromLocalStorage(name: string) {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem(name);
    } else {
        // Sorry! No Web Storage support..
    }
  }
}
