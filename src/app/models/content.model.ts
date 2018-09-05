import { CommentModel } from './comment.model';


export class ContentModel {

    id: string;

    isFavorite: boolean;

    author: string;

    actionType: string;
    subjectName: string;
    objectName: string;

    text: string;

    comments: Array<CommentModel>;
}
