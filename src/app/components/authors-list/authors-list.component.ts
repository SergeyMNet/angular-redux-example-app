import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../../models/author.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState, FeedStoreSelectors, FeedStoreActions } from '../../root-store';

@Component({
    selector: 'app-authors-list',
    templateUrl: 'authors-list.component.html',
    styleUrls: ['authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {

    authorsList$: Observable<AuthorModel[]>;
    isLoading$: Observable<boolean>;

    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit(): void {

        this.authorsList$ = this.store$.select(
            FeedStoreSelectors.selectAuthors
        );

        this.isLoading$ = this.store$.select(
            FeedStoreSelectors.selectFeedIsLoading
        );
    }

    selAuthor(name: string) {
        this.store$.dispatch(
            new FeedStoreActions.ShowByAuthorAction({ author: name })
        );
    }
}
