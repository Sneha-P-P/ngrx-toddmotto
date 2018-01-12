import { PizzaState } from './pizzas.reducer';
import { Pizza } from './../../models/pizza.model';
import * as fromPizzas from './../actions/pizzas.action';

export interface PizzaState{
    entities: { [id: number]: Pizza },
    Loaded: boolean,
    Loading: boolean
}

export const initialState: PizzaState = {
    entities: {},
    Loaded: false,
    Loading: false
}

export function reducer(state= initialState, action: fromPizzas.PizzaAction ): PizzaState{
    switch(action.type){
        case fromPizzas.LOAD_PIZZAS:{
            return {
                ...state,
                Loading: true
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                Loaded : false,
                Loading : false
            }
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                Loaded: true,
                Loading : false
            }
        }

    }
}

export const getPizzaEntities = (state: PizzaState) => state.entities;
export const getPizzaLoaded = (state: PizzaState) => state.Loaded;
export const getPizzaLoading = (state: PizzaState) => state.Loading;
