import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState, FeedStoreSelectors } from '../../root-store';

@Component({
    selector: 'app-loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.scss']
})
export class LoadingComponent implements OnInit {

    isLoading$: Observable<boolean>;

    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit(): void {

        this.isLoading$ = this.store$.select(
            FeedStoreSelectors.selectFeedIsLoading
        );
    }
}
