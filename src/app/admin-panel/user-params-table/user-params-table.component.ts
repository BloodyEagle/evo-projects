import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-params-table',
  templateUrl: './user-params-table.component.html',
  styleUrls: ['./user-params-table.component.css']
})
export class UserParamsTableComponent {
  @Input() params: { name: string, value: string }[] = []
}
