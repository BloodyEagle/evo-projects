import {Component, Input} from '@angular/core';
import {TzCookingSteps} from "../../../interfaces/recipes/tz-cooking-steps";

@Component({
  selector: 'app-one-step',
  templateUrl: './one-step.component.html',
  styleUrls: ['./one-step.component.css']
})
export class OneStepComponent {
  @Input() fieldNameTitle: string = '';
  @Input() fieldNameDescription: string = '';
  @Input() valueTitle: string = '';
  @Input() valueDescription: string = '';
  @Input() counter: number = 0;
  @Input() model: TzCookingSteps = {title: '', description: ''};
  @Input() error!: { invalid: boolean[] };

  constructor() {
  }
}
