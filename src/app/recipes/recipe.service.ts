import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shooping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

      private recipes: Recipe[] = []; /* = [
        new Recipe(
          'Golden Bread', 
          'This is a test', 
          'https://natashaskitchen.com/wp-content/uploads/2018/05/Banana-Bread-Recipe-6-768x1152.jpg',
          [
            new Ingredient("Bread", 1),
            new Ingredient("Butter", 2)
          ]
        ),
        new Recipe(
          'Vegetables Salad', 
          'Tomatoes and Carrots', 
          'https://www.eatwell101.com/wp-content/uploads/2020/10/roasted-vegetable-recipe.jpg',
          [
            new Ingredient("Tomatoes", 5),
            new Ingredient("Garlic", 8),
            new Ingredient("Onion", 2)
          ]
        ),
        new Recipe(
          'Pastas', 
          'Penne alla Bolognesa', 
          'https://www.seriouseats.com/thmb/MQZi8xXfKTg-D9ebGuEvTbj7ZDk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__03__20170306-fast-pasta-recipes-roundup-01-23db99d60a534e6ebdc7c6f7fe0f596e.jpg',
          [
            new Ingredient("Pasta", 1),
            new Ingredient("Onion", 2),
            new Ingredient("Tomatoes", 2)
          ]
        ),
          new Recipe(
          'Sweet Potatoes', 
          'Vegetarian dish', 
          'https://static.toiimg.com/thumb/62352157.cms?imgsize=319138&width=509&height=340',
          [
            new Ingredient("Potatoes", 4),
            new Ingredient("Sugar", 1),
            new Ingredient("Lettuce", 2)
          ]
        ),
      ]; */

      constructor(private shoppinglistService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        console.log("setRecipes: " + this.recipes);
        this.recipeChanged.next(this.recipes.slice());  
      }
      
      getRecipes() {
        console.log("getRecipes: " + this.recipes.slice());
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      toShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.recipetoShoppinglist(ingredients);  
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }

}