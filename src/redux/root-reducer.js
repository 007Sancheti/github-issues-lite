import { combineReducers } from 'redux';

import { issuesReducer } from './issues/issues.reducer.js';

const rootReducer = combineReducers({
    issues: issuesReducer,
});

export default rootReducer;
