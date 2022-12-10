import View from './view.js';
import icons from 'url:../../img/icons.svg';

class addRecipeView extends View {
  _message = 'Your recipe is added succesfully';
  _ParentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this.showRecipeHandler();
    this.hideRecipeHandler();
  }

  toggle() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  showRecipeHandler() {
    this._btnOpen.addEventListener('click', this.toggle.bind(this));
  }

  hideRecipeHandler() {
    this._btnClose.addEventListener('click', this.toggle.bind(this));
    this._overlay.addEventListener('click', this.toggle.bind(this));
  }

  addHandlerUpload(handler) {
    this._ParentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];

      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}
export default new addRecipeView();
