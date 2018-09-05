import { Component, Input } from '@angular/core';
import { ContentModel } from '../../models';

@Component({
    selector: 'app-feed-card-item',
    templateUrl: 'feed-card-item.component.html',
    styleUrls: ['feed-card-item.component.scss']
})
export class FeedCardItemComponent {

    @Input() content: ContentModel;

}
