import { Component } from '@angular/core';
import { RootStoreState, FeedStoreActions } from '../../root-store';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-feed-menu',
    templateUrl: 'feed-menu.component.html',
    styleUrls: ['feed-menu.component.scss']
})
export class FeedMenuComponent {

    constructor(private store$: Store<RootStoreState.State>) { }

    public showAll() {
        this.store$.dispatch(
            new FeedStoreActions.ShowAllAction()
        );
    }
    public showOnlyFavorites() {
        this.store$.dispatch(
            new FeedStoreActions.ShowFavoritesAction()
        );
    }
    public showByAuthor(author: string) {
        this.store$.dispatch(
            new FeedStoreActions.ShowByAuthorAction(author)
        );
    }


    public onRefresh() {
        this.store$.dispatch(
            new FeedStoreActions.LoadRequestAction()
        );
    }

}
