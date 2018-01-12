import { ProductState } from './index';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizza from './pizzas.reducer';

export interface ProductState {
    pizza: fromPizza.PizzaState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizza: fromPizza.reducer
}

export const getProductsState = createFeatureSelector<ProductState>(
    'products'
  );