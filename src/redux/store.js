import RootReducer from "./reducers/rootReducer";
import { applyMiddleware } from "redux";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const Store=createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default Store;