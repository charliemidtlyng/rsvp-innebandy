import EventsSaga from './events/sagas'
import EventSaga from './event/sagas'
import TournamentSaga from './tournament/sagas'
export default function* IndexSaga () {
  yield [
    EventsSaga(),
    EventSaga(),
    TournamentSaga(),
  ]
}
