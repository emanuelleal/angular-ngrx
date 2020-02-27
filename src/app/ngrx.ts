import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './actions/counter.action';

const INITIAL_STATE = {
  counter: 0
};

export const counter = createReducer(
  INITIAL_STATE,
  on(increment, (state, {payload}) => ({
    ...state,
    counter: state.counter + payload
  })),
  on(decrement, (state, {payload}) => ({
    ...state,
    counter: state.counter - payload
  }))
);
