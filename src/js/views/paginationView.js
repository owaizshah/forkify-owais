import View from './view.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _ParentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._ParentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const pageNum = this._data.page;

    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerpage
    );

    //page 1 and there are other pages
    if (pageNum === 1 && numPages > 1) {
      return `<button data-goto="${
        pageNum + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${pageNum + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    //last
    if (pageNum === numPages && numPages > 1) {
      return `<button data-goto="${
        pageNum - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${pageNum - 1}</span>
    </button>`;
    }

    //other pages
    if (pageNum < numPages) {
      return `<button data-goto="${
        pageNum + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${pageNum + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> <button  data-goto="${
      pageNum - 1
    }"class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${pageNum - 1}</span>
  </button>`;
    }
    //page 1 and there are no other pages
    return '';
  }
}

export default new paginationView();
