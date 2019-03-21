import {getSmsRecordByShortkey, setMailWaitState} from "../services/api";
import {routerRedux} from 'dva/router'
import {message} from "antd";



export default {
  namespace: "interview",
  state: {
    data:''
  },
  effects: {

    * getSmsRecordByShortkey({payload}, {call, put}) {
      const res = yield call(getSmsRecordByShortkey, payload);
      if (res.success) {
        yield put( {
          type: "updateState",
          payload: {
             data:res.data[0]
          }
        } );
      }

    },
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload};
    }
  }
};



