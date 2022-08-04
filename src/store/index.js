import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import charactersReducer from './characters/reducers';
import housesReducer from './houses/reducers';
import spellsReducer from './spells/reducers';
import commentsReducer from './forum/reducers';
import favoritesReducer from './favorites/reducers';
import tokenReducer from './token/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  characters: charactersReducer,
  houses: housesReducer,
  spells: spellsReducer,
  comments: commentsReducer,
  favCharacter: favoritesReducer,
  token: tokenReducer
});

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
