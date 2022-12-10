class SearchView {
  #parentcl = document.querySelector('.search');

  getQuery() {
    const value = this.#parentcl.querySelector('.search__field').value;
    this.#clearResult();
    return value;
  }

  addHandlerSearch(handler) {
    this.#parentcl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  #clearResult() {
    this.#parentcl.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
