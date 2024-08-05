import {Component, ComponentRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {NotifyWindowComponent} from "./notify-window/notify-window.component";

@Component({
  selector: 'app-simple-notify',
  templateUrl: './simple-notify.component.html',
  styleUrls: ['./simple-notify.component.css']
})
export class SimpleNotifyComponent {
  @ViewChild('notify', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<NotifyWindowComponent>;

  @Input() title: string = '';
  @Input() text: string = '';
  @Input() icon: string = 'assets/img/scheck.svg';

  constructor() {
  }
  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(NotifyWindowComponent);
    (<NotifyWindowComponent>(this.componentRef.instance)).title = this.title;
    (<NotifyWindowComponent>(this.componentRef.instance)).text = this.text;
    (<NotifyWindowComponent>(this.componentRef.instance)).icon = this.icon;
    (<NotifyWindowComponent>(this.componentRef.instance)).onClose.subscribe(() => {
      this.deleteComponent();
    });
    setTimeout(() => {
        this.deleteComponent()
    }, 3000);
  }
  deleteComponent() {
    this.viewRef.clear();
  }

  protected readonly alert = alert;
}
