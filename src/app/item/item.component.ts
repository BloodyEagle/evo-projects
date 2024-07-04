import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../Item";
import { ITEMS } from "../mock-items";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private finded: Item | undefined;
  public item: Item;

  constructor(
    private activeRouter: ActivatedRoute,
    private location: Location
  ) {
    this.finded  = ITEMS.find(item => item.id == this.activeRouter.snapshot.params['id']);
    if (typeof this.finded === 'undefined')
      this.item = new Item();
    else
      this.item = this.finded;
  }

  goBack(): void {
    this.location.back();
  }
}
