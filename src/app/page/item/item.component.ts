import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private location: Location) {
  }

  public goBack(): void {
    this.location.back();
  }


}
