import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RecipesActions from '../store/recipes.actions';
import * as fromApp from '../../store/app.reducer';
import { Recipe } from '../recipe.model';


@Injectable()
export class RecipeEffects {
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),    // Filter of Actions
        switchMap(() => {
            return this.http
                .get<Recipe[]>(
                'https://angular-recipebook-proje-bf415-default-rtdb.firebaseio.com/recipes.json'
                );
        }),
        map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe, 
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
        map(recipes => {
            return new RecipesActions.SetRecipes(recipes);
        })
    ); 
    
    @Effect({dispatch: false})
    storeRecipes = this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),           // actionData comes from ofType()
        withLatestFrom(this.store.select('recipes')),   // recipesState comes from withLatestFrom()
        switchMap(([actionData, recipesState]) => {
            return this.http
                .put(
                    'https://angular-recipebook-proje-bf415-default-rtdb.firebaseio.com/recipes.json', 
                    recipesState.recipes
                );
        })
    );

    constructor(
        private actions$: Actions, 
        private http: HttpClient,
        private store: Store<fromApp.AppState>) {}
}