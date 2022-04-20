import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

// Создаём store при помощи импортированной функции,
// в которую в качестве аргумента передаём редюсеры
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
