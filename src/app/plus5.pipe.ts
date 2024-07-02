import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'plus5'
})
export class Plus5Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 5;
  }

}
