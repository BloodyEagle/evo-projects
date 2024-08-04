import {Component, Input} from '@angular/core';
import {TzFoodValue} from "../../interfaces/recipes/tz-food-value";

@Component({
  selector: 'app-food-value',
  templateUrl: './food-value.component.html',
  styleUrls: ['./food-value.component.css']
})
export class FoodValueComponent {
  @Input() foodValue: TzFoodValue ={calories: 0, fats: 0, proteins: 0, carbohydrates: 0};
}
