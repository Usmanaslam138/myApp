import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterP",
})
export class FilterPPipe implements PipeTransform {
  transform(value: any, SearchTerm: any) {
    if (value.length === 0) {
      return value;
    } else {
      return value.filter(function (search) {
        return search.name.toLowerCase().indexOf(SearchTerm.toLowerCase()) > -1;
      });
    }
  }
}
