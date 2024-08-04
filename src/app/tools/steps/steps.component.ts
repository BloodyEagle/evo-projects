import {Component, Input, OnInit} from '@angular/core';
import {TzCookingSteps} from "../../interfaces/recipes/tz-cooking-steps";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {
  @Input() steps!: TzCookingSteps[];
  public stepsChecked!: boolean[];

  ngOnInit(): void {
    this.stepsChecked = new Array(this.steps.length).fill(false);
  }
}
