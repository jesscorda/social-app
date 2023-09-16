import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 50 ? `${value.substring(0, 50)}...` : value;
  }
}
