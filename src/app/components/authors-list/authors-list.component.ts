import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthorModel } from '../../models/author.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState, FeedStoreSelectors, FeedStoreActions } from '../../root-store';
import { InvokeFunctionExpr } from '@angular/compiler';
import { FilterModel } from '../../models/filter.model';

@Component({
    selector: 'app-authors-list',
    templateUrl: 'authors-list.component.html',
    styleUrls: ['authors-list.component.scss']
})
export class AuthorsListComponent {

    @Input() filter: FilterModel = new FilterModel();
    @Input() authorsList: Array<AuthorModel>;

    @Output() useFilter: EventEmitter<FilterModel> = new EventEmitter();

    constructor() { }

    selAuthor(name: string) {

        if (name === this.filter.selAuthor) {
            this.filter.selAuthor = '';
            this.useFilter.emit(this.filter);
        } else {
            this.filter.selAuthor = name;
            this.useFilter.emit(this.filter);
        }
    }
}
