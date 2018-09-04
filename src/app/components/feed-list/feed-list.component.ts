import { Component } from '@angular/core';
import { ContentModel } from '../../models';

@Component({
    selector: 'app-feed-list',
    templateUrl: 'feed-list.component.html',
    styleUrls: ['feed-list.component.scss']
})
export class FeedListComponent {

    public collectionMock: Array<ContentModel> = [ new ContentModel() ];
}

