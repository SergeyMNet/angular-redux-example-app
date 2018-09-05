import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RootStoreState, FeedStoreActions } from '../../root-store';
import { Store } from '@ngrx/store';
import { FilterModel } from '../../models/filter.model';

@Component({
    selector: 'app-feed-menu',
    templateUrl: 'feed-menu.component.html',
    styleUrls: ['feed-menu.component.scss']
})
export class FeedMenuComponent {

    @Input() filter: FilterModel = new FilterModel();

    @Output() useFilter: EventEmitter<FilterModel> = new EventEmitter();

    constructor() { }

    public showOnlyFavorites() {
        this.useFilter.emit(this.filter);
    }
}
