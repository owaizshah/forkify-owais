import { async } from 'regenerator-runtime';
import { API_URL, API_KEY } from './config.js';
import { TIMEOUT_, RES_PER_PAGE } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { ajax } from './helpers.js';

import { timeout } from './helpers.js';

export const state = {
  recipe: {},
  search: { query: '', result: [], resultsPerpage: RES_PER_PAGE, page: 1 },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceURL: recipe.source_url,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await Promise.race([
      ajax(`${API_URL}/${id}?key=${API_KEY}`),
      timeout(TIMEOUT_),
    ]);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
    console.log(err);
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;

    const data = await ajax(`${API_URL}?search=${query}&key=${API_KEY}`);

    console.log(data.results / 10);

    state.search.result = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        title: rec.title,
        publisher: rec.publisher,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(err);
  }
};

export const searchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerpage;
  const end = page * state.search.resultsPerpage;

  return state.search.result.slice(start, end);
};

export const updateServing = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
  console.log(state.recipe);
};

const persistBookmarks = function () {
  //storing in local storage and converting into strings
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //adding bookmark
  state.bookmarks.push(recipe);
  ///mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  //deleting bookmarks
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  state.bookmarks.splice(index, 1);

  // marking currenct recipe as NOT bookemarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  //getting data from local strorage and converting into object

  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

// const clearStorage = function () {
//   localStorage.removeItem('bookmarks');
// };

// clearStorage();

export const addrecipeData = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());

        if (ingArr.length !== 3)
          throw new Error('Please Insert Correct Format of Recipe');

        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });

    const recipe = {
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      servings: +newRecipe.servings,
      cooking_time: +newRecipe.cookingTime,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      ingredients,
    };
    const data = await ajax(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
