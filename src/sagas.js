import {
  database
} from "./firebase-config";
import axios from "axios";
import {
  put,
  fork,
  takeEvery,
  take,
  delay
} from "redux-saga/effects";
import {
  eventChannel
} from "redux-saga";
import {
  SAVE_FORM
} from "./actions/types";
import {
  updateStore
} from "./actions/formActions";

export function* sendRequest({
  payload
}) {
  //console.log(payload);
  yield axios
    .post(
      "https://us-central1-enye-challenge-3.cloudfunctions.net/addUser",
      payload
    )
    .then(res => {
      // here will be code
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
}

export function* watchSendAction() {
  yield takeEvery(SAVE_FORM, sendRequest);
}

/* export function* receiveRequest({
  payload
}) {
  //console.log(payload);
  yield axios.get('https://us-central1-enye-challenge-3.cloudfunctions.net/addUser', payload)
    .then(res => {
      // here will be code
      console.log(res)
    })
    .catch(error => {
      console.log(error);
    });
};

export function* watchReceiveAction() {
  yield takeLatest('UPDATE_STORE', receiveRequest);
} */

function* startListener() {
  //yield delay(9000)
  // #1
  const channel = eventChannel(emiter => {
    const listener = database.ref("entries/users").on("value", snapshot => {
      emiter({
        data: snapshot.val()
      });
    });
    //console.log(listener);

    // #2
    return () => {
      listener.off();
    };
  });
  //console.log(channel);
  // #3
  while (true) {
    const {
      data
    } = yield take(channel);

    if (data !== null) {
      const dbC = Object.values(data);
      yield put(updateStore(dbC));
    } else {
      yield put(updateStore(data));
    }
    //console.log(data)
    // #4
    //yield put(updateStore(dbC));
  }
}


export default function* helloSaga() {
  yield fork(watchSendAction);
  //yield fork(watchReceiveAction);
  yield fork(startListener);
}

/*function createEventChannel() {
  const listener = new eventChannel(emit => {
    database.ref("entries/users").on("child_added", data => emit(data.val()));
    return () => database.ref("entries/users").off(listener);
  });
  console.log(listener);
  return listener;
}

//This is supposed to update my store with the data received by the database
function* startListener() {
  const updateChannel = createEventChannel();
  while (true) {
    const data = yield take(updateChannel);
    yield put(UPDATE_STORE(data));
  }
}

export default function* helloSaga() {
  yield fork(watchSendAction);
  yield fork(startListener);
}*/