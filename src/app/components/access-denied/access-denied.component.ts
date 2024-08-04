import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css']
})
export class AccessDeniedComponent {
  constructor(private location: Location) {}

  public goBack(): void {
    this.location.back();
  }
}
