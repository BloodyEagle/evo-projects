import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../Item";
import {ITEMS} from "../../mock-items";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private finded: Item | undefined;
  public item: Item;

  constructor(
    private activeRouter: ActivatedRoute
  ) {

    this.finded = ITEMS.find(item => item.id == this.activeRouter.parent?.snapshot.params['id']);
    if (typeof this.finded === 'undefined') {
      this.item = new Item();
    } else {
      this.item = this.finded;
    }

  }

  ngOnInit() {
    console.log(this.activeRouter.parent?.snapshot.params['id']);
  }
}
