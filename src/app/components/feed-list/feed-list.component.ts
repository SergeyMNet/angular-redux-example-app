import { Component, OnInit } from '@angular/core';
import { ContentModel } from '../../models';
import { Observable } from 'rxjs';
import { RootStoreState, FeedStoreSelectors, FeedStoreActions } from '../../root-store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-feed-list',
    templateUrl: 'feed-list.component.html',
    styleUrls: ['feed-list.component.scss']
})
export class FeedListComponent implements OnInit {


    selFavorites = 0;
    selAuthor = '';

    contentList$: Observable<ContentModel[]>;
    error$: Observable<any>;
    isLoading$: Observable<boolean>;


    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit(): void {

        this.contentList$ = this.store$.select(
            FeedStoreSelectors.selectFeedList
        );

        this.error$ = this.store$.select(
            FeedStoreSelectors.selectFeedError
        );

        this.isLoading$ = this.store$.select(
            FeedStoreSelectors.selectFeedIsLoading
        );

        this.store$.dispatch(
            new FeedStoreActions.LoadRequestAction()
        );
    }
}
