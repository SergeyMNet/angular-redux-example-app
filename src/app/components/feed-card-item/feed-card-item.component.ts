import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentModel } from '../../models';

@Component({
    selector: 'app-feed-card-item',
    templateUrl: 'feed-card-item.component.html',
    styleUrls: ['feed-card-item.component.scss']
})
export class FeedCardItemComponent {

    @Input() content: ContentModel;

    @Output() updateContent: EventEmitter<ContentModel> = new EventEmitter();

    setFavorites() {
        this.updateContent.emit(this.content);
    }
}
