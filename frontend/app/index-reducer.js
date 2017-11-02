import { combineReducers } from 'redux'
import events from './events/reducer'
import event from './event/reducer'
import tournaments from './tournament/reducer'

const IndexReducer = combineReducers({
  events,
  event,
  tournaments
});

export default IndexReducer