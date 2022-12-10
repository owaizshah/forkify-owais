import * as model from './model.js';
import recipeViews from './views/recipeViews.js';
import SearchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addrecipeView from './views/addrecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime';
import bookmarksView from './views/bookmarksView.js';
import { async } from 'regenerator-runtime';
import { MODEL_CLOSE_SEC } from './config.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    //Guard clause
    if (!id) return;

    recipeViews.renderSpinner();

    resultsView.update(model.searchResultsPage());

    bookmarksView.update(model.state.bookmarks);
    //loading recipe
    await model.loadRecipe(id);

    //render recipe
    recipeViews.render(model.state.recipe);
  } catch (err) {
    recipeViews.renderError();
  }
};

const controlSearchresult = async function () {
  try {
    resultsView.renderSpinner();

    const query = SearchView.getQuery();

    await model.loadSearchResult(query);

    resultsView.render(model.searchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (gotoPage) {
  resultsView.render(model.searchResultsPage(gotoPage));
  console.log(model.searchResultsPage(gotoPage));

  paginationView.update(model.state.search);
};

const controlServing = function (goto) {
  model.updateServing(goto);
  recipeViews.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeViews.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //get data
    addrecipeView.renderSpinner();

    await model.addrecipeData(newRecipe);

    //render data
    recipeViews.render(model.state.recipe);

    //render succesfull messgae
    addrecipeView.renderMessage();

    //render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    //change hash

    window.history.pushState(null, '', model.state.recipe.id);

    //close model window after some seconds
    setTimeout(function () {
      addrecipeView.toggle();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addrecipeView.renderError(err.message);
  }
};

const inIt = function () {
  recipeViews.addHandlerRender(controlRecipe);
  recipeViews.addHandlerServing(controlServing);
  recipeViews.addHanderBookmark(controlAddBookmark);
  SearchView.addHandlerSearch(controlSearchresult);
  paginationView.addHandlerClick(controlPagination);
  bookmarksView.addHandlerload(controlBookmark);
  addrecipeView.addHandlerUpload(controlAddRecipe);
};
inIt();
