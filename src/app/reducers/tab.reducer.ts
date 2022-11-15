import { createReducer, on } from '@ngrx/store';
import { next, previous } from '../actions/tab.actions';

export const initialState = 6;

const _tabReducer = createReducer(initialState,
    on(next, (state, action) => state + 1),
    on(previous, (state, action) => state > 0 ? state - 1 : state),
);

export function tabReducer(state: any, action: any) {
    return _tabReducer(state, action);
}