import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
    @Input() avatar: string | undefined = '';
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() isDate: boolean = false;
}
