import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  // tslint:disable-next-line:ban-types
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.title.indexOf(filter.title) !== -1);
  }
}
