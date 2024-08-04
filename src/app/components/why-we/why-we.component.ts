import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.css']
})
export class WhyWeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
