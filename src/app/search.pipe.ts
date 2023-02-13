
import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './Item';

@Pipe({ name: 'searchQuery' })

export class SearchPipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    if (!items) {
        return [];
      }
    if (!searchText) {
        return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}