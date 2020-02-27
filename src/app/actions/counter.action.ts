import { createAction } from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = 'Increment',
  DECREMENT = 'Decrement'
}

export const increment = createAction(
  ActionTypes.INCREMENT,
  (payload: number) => ({ payload })
);

export const decrement = createAction(
  ActionTypes.DECREMENT,
  (payload: number) => ({ payload })
);



