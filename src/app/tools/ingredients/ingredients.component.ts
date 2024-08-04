import {Component, Input, OnInit} from '@angular/core';
import {TzIngredients} from "../../interfaces/recipes/tz-ingredients";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() ingredients!: TzIngredients[];
  public ingredientsChecked!: boolean[];

  ngOnInit(): void {
    this.ingredientsChecked = new Array(this.ingredients.length).fill(false);
  }
}
