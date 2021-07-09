import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shooping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppinglistService: ShoppingListService,
              private loggingService: LoggingService) { }

  ngOnInit(){
    this.ingredients = this.shoppinglistService.getIngredients();
    this.subscription = this.shoppinglistService.ingredientChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
    //console.log("shoppinglist ngOnInit Called");
    this.loggingService.printLog('Hello from SLComponent ngOnInit!');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }

}
