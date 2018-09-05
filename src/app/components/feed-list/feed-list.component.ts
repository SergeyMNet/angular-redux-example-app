import { Component, OnInit } from '@angular/core';
import { ContentModel } from '../../models';
import { Observable } from 'rxjs';
import { RootStoreState, FeedStoreSelectors, FeedStoreActions } from '../../root-store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { FilterModel } from '../../models/filter.model';
import { AuthorModel } from '../../models/author.model';


@Component({
    selector: 'app-feed-list',
    templateUrl: 'feed-list.component.html',
    styleUrls: ['feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

    contentList$: Observable<ContentModel[]>;
    authorsList$: Observable<AuthorModel[]>;
    error$: Observable<any>;
    isLoading$: Observable<boolean>;
    filterFeed$: Observable<FilterModel>;

    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit(): void {

        this.contentList$ = this.store$.select(
            FeedStoreSelectors.selectFeedList
        );

        this.authorsList$ = this.store$.select(
            FeedStoreSelectors.selectAuthors
        );

        this.error$ = this.store$.select(
            FeedStoreSelectors.selectFeedError
        );

        this.isLoading$ = this.store$.select(
            FeedStoreSelectors.selectFeedIsLoading
        );

        this.filterFeed$ = this.store$.select(
            FeedStoreSelectors.selectFilter
        );

        this.store$.dispatch(
            new FeedStoreActions.LoadRequestAction()
        );
    }

    filterFeed(f: any) {
        console.log(f);

        this.store$.dispatch(
            new FeedStoreActions.UseFilterAction({ filter: f })
        );
    }
}
