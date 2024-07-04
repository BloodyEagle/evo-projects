import { Component } from '@angular/core';
import {Item} from "../Item";
import { ITEMS } from "../mock-items";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

    public items: Item[] = ITEMS;
}
