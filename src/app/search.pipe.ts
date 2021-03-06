import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      return value.filter(obj => {
        var arr = [];
        for (var key in obj) {
          console.log(obj[key])
          if (obj[key].toString().trim().toLowerCase().includes(args.trim().toLowerCase())) {
            arr.push(1)
          }
        }
        if (arr.indexOf(1) !== -1) {
          return obj
        }
      });
    }

  }

}
