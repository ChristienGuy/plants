import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import navReducer, { navMiddleware } from "./navigation";
import plantsReducer from "./plants"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['plants']
}

const appReducer = combineReducers({
  navigation: navReducer,
  plants: plantsReducer
});

const persistedReducer = persistReducer(persistConfig, appReducer);

const store: Store<any> = createStore(
  persistedReducer,
  compose(
    applyMiddleware(navMiddleware),
    // compose expects a method, if __REDUX_DEVTOOLS_EXTENSION__ returns false then this returns a boolean not a method
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
  )
);

export const persistor = persistStore(store)
export default store;
