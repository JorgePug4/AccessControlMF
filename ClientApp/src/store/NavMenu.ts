import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface NavState {
    isVisible: boolean;
}

export interface VisibleAction { type: 'VISIBLE_NAV' }
export interface NoVisibleAction { type: 'NO_VISIBLE_NAV' }

export type KnownAction = VisibleAction | NoVisibleAction;

export const actionCreators = {
    VisibleAction: () => ({ type: 'VISIBLE_NAV' } as VisibleAction),
    NoVisibleAction: () => ({ type: 'NO_VISIBLE_NAV' } as NoVisibleAction)
};

export const reducer: Reducer<NavState> = (state: NavState | undefined, incomingAction: Action): NavState => {
    if (state === undefined) {
        return { isVisible: false };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'VISIBLE_NAV':
            return { isVisible: true };
        case 'NO_VISIBLE_NAV':
            return { isVisible: false };
        default:
            return state;
    }
};