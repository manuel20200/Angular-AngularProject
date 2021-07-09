import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //@Input() itemDetail: Recipe;
  itemDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log("recipedetail executed! {{ ");
          this.id = +params['id'];
          console.log(this.id);
          this.itemDetail = this.recipeService.getRecipe(this.id);
          console.log(this.itemDetail);
          console.log(this.recipeService.getRecipes() + " }}");
        }
      );
  }

  recipetoShoppinglist() {
    this.recipeService.toShoppingList(this.itemDetail.ingredients);
    //console.log("Button To ShoppingList Pressed");
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
