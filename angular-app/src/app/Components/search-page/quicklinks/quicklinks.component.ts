import { FiltersService } from './../../../Services/filters-service/filters-service.service';
import { DataService } from './../../../Services/data-service/data-service.service';
import { QuicklinkData } from './../../../Models/QuicklinksModels';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.css']
})
export class QuicklinksComponent implements OnInit {
  @Input() type: string;
  @Output() onClick = new EventEmitter<string>();
  data: QuicklinkData = null;

  constructor(private _dataService: DataService,
    private _filterService: FiltersService) { }

  ngOnInit() {
    this._dataService.GetQuicklinks(this.type)
      .then(data => this.data = data)
      .catch(this.handleError);
  }

  onSelect (display_name: string, link: string){
    this._filterService.AddFilter(display_name, this.type, link);
    this.onClick.emit();
  }

  /**
   * Handle errors from the requests
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
