import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_STUDENT } from './studentConstants';

const initialState = [];

export const createStudent = (state, payload) => {
  return [...state, Object.assign({}, payload.student)];
};

export default createReducer(initialState, {
  [CREATE_STUDENT]: createStudent
});
