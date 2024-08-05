import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TzCookingSteps} from "../../interfaces/recipes/tz-cooking-steps";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit, OnChanges {
  @Input() steps!: TzCookingSteps[];
  public stepsChecked!: boolean[];

  ngOnInit(): void {
    this.stepsChecked = new Array(this.steps.length).fill(false);
  }

  ngOnChanges(): void {
    this.stepsChecked = new Array(this.steps.length).fill(false);
  }
}
