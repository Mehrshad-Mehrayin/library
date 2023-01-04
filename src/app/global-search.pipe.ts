import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'globalSearch'
})
export class GlobalSearchPipe implements PipeTransform {
  transform<T>(value: T[], searchStr?: string, fieldName?: string): T[] {
    if (!searchStr) {
      return value;
    }
    // @ts-ignore
    return value.filter(f=>f[fieldName]?.toLowerCase().includes(searchStr))
  }
}
