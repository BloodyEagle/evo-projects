import {Component} from '@angular/core';
import {Notify} from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alerts: any[] = [
    {
      type: 'success',
      msg: `Wery good!.`,
    },
    {
      type: 'info',
      msg: `Info from Notiflix.`,
    },
    {
      type: 'danger',
      msg: `Warning. Dangerous situation.`,
    },
    {
      type: 'warning',
      msg: `Warning. Dangerous situation.`,
    },
    {
      type: 'error',
      msg: `Warning. Dangerous situation.`,
    },
  ];

  alert(type: string) {
    let finded = this.alerts.find(item => item.type == type) ?? {type: 'error'};
    switch (finded.type) {
      case 'success':
        Notify.success('Success Alert');
        break;
      case 'warning':
        Notify.warning('Warning Alert');
        break;
      case 'info':
        Notify.info('Info Alert');
        break;
      default:
        Notify.failure('Error Alert');
        break;
    }
  }
}
