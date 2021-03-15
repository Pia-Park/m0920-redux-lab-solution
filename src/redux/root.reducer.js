import { combineReducers } from 'redux'
import personReducer from './person.reducer'
import countReducer from './count.reducer';

const rootReducer = combineReducers({
    people: personReducer,
    counter: countReducer
})

export default rootReducer