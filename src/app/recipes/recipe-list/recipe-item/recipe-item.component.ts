import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  /* @Output() sendItem = new EventEmitter<void>(); */
  @Input() index: number;

  ngOnInit(): void {
  }

  /* selectItem() {
    this.sendItem.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
 */
}
