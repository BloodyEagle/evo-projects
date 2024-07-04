import { Component } from '@angular/core';
import {Item} from "../../Item";
import {ActivatedRoute} from "@angular/router";
import {ITEMS} from "../../mock-items";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  private finded: Item | undefined;
  public item: Item;

  constructor(
    private activeRouter: ActivatedRoute
  ) {
    this.finded  = ITEMS.find(item => item.id == this.activeRouter.parent?.snapshot.params['id']);
    if (typeof this.finded === 'undefined')
      this.item = new Item();
    else
      this.item = this.finded;
  }
}
