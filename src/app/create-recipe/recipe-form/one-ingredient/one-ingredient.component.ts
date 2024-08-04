import {Component, Input} from '@angular/core';
import {TzIngredients} from "../../../interfaces/recipes/tz-ingredients";

@Component({
  selector: 'app-one-ingredient',
  templateUrl: './one-ingredient.component.html',
  styleUrls: ['./one-ingredient.component.css']
})
export class OneIngredientComponent {
  @Input() fieldNameTitle: string = '';
  @Input() fieldNameDescription: string = '';
  @Input() valueTitle: string = '';
  @Input() valueDescription: string = '';
  @Input() counter: number = 0;
  @Input() model: TzIngredients = {title: '', description: ''};
  @Input() error: { invalid: boolean[] } = {invalid: [false]};

  constructor() {
  }

}
