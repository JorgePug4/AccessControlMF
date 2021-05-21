import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';


interface formdata {
    User: string,
    Password: string
}
interface infoEmployee {
    Name: string,
    TypeeUser: string
}

export interface LoginState {
    // messageError: string;
    // formdata: formdata;
    // infoEmployee:infoEmployee;
    isLogged:boolean;

}


export interface LoginAction { type: 'LOGIN' }

export type KnownAction = LoginAction;

export const actionCreators = {
    VisibleAction: () => ({ type: 'LOGIN' } as LoginAction),
  
};
const dd = {} as FormData
export const reducer: Reducer<LoginState> = (state: LoginState | undefined, incomingAction: Action): LoginState => {
    if (state === undefined)
        return {isLogged: false}
    const action = incomingAction as KnownAction;
    switch (action.type) {
        default:
            return state;
    }
};