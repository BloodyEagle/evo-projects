import {Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public persons = [
    {id: 1, name: 'John', age: 25, city: 'New York'},
    {id: 2, name: 'Jane', age: 30, city: 'Paris'},
    {id: 3, name: 'Bob', age: 35, city: 'London'},
    {id: 4, name: 'Alice', age: 40, city: 'Berlin'},
    {id: 5, name: 'Charlie', age: 45, city: 'Madrid'}
  ];

}
