import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FeedMockDataService implements InMemoryDbService {

  createDb() {
    const feed = [
      {
        'id': '1',
        'isFavorite': false,
        'author': 'Sergey',
        'actionType': 'liked',
        'subjectName': 'ContentName',
        'objectName': 'Sergey',
        'comments': []
      },
      {
        'id': '2',
        'isFavorite': false,
        'author': 'Sergey',
        'actionType': 'liked',
        'subjectName': '777',
        'objectName': 'Sergey',
        'comments': []
      },
      {
        'id': '3',
        'isFavorite': false,
        'author': 'Sergey',
        'actionType': 'liked',
        'subjectName': 'another',
        'objectName': 'Sergey',
        'comments': []
      },
    ];

    return {feed};
  }
}
