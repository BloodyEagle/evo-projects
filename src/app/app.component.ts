import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('personsTable', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<TableComponent>;

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(TableComponent);
  }

  deleteComponent() {
    this.viewRef.clear();
  }
}
