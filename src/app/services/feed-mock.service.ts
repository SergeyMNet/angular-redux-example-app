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
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      },
      {
        'id': '2',
        'isFavorite': true,
        'author': 'Sergey',
        'actionType': 'liked',
        'subjectName': '777',
        'objectName': 'Sergey',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      },
      {
        'id': '3',
        'isFavorite': false,
        'author': 'Sergey',
        'actionType': 'liked',
        'subjectName': 'another',
        'objectName': 'Sergey',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      },
      {
        'id': '4',
        'isFavorite': false,
        'author': 'Adam',
        'actionType': 'liked',
        'subjectName': 'another',
        'objectName': 'Sergey',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      },
      {
        'id': '5',
        'isFavorite': true,
        'author': 'Felipe',
        'actionType': 'liked',
        'subjectName': 'another',
        'objectName': 'Adam',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      },
      {
        'id': '5',
        'isFavorite': false,
        'author': 'Amanda',
        'actionType': 'liked',
        'subjectName': 'another',
        'objectName': 'Adam',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'comments': []
      }
    ];

    return {feed};
  }
}
