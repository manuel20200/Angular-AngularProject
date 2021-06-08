import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shooping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') nameInputRef: ElementRef;
  @ViewChild('itemAmount') nameAmountRef: ElementRef;
  /* @Output() shoppingStatus = new EventEmitter<Ingredient>(); */
  

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addExecute() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.nameAmountRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    /* this.shoppingStatus.emit(ingredient); */
    this.shoppinglistService.changeList(ingredient);
    /* this.shoppinglistService.shoppingStatus.emit(ingredient); */
  }

}
