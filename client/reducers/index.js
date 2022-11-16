import { combineReducers } from 'redux';

// import all reducers here
import relaxationReducers from './relaxationReducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  relax: relaxationReducers,
});

// make the combined reducers available for import
export default reducers;
