import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  public subscriberEmail: string = '';
  constructor(private notifier: ToastrService) {
  }

  suscribeSuccess() {
    this.notifier.success('Мы будем присылать вам новые рецепты на вашу почту', 'Подписка оформлена');
  }
}
