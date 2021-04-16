
import { combineReducers } from 'redux';
import { reducer as todos } from './container_todos/slice'



export const reducer = combineReducers({
    todos,
});