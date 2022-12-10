import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _ParentEl = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmarks yet, please found a nice recipe and bookmark it';
  _message = '';

  addHandlerload(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
