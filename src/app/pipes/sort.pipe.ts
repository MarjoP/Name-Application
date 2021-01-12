import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, value: any []): any {
    var sortBy = value[0]
    var multiplier =1;

    if(sortBy == 'name'){
      multiplier =-1;
    }
    var order =value[1];

   array.sort((a:any, b:any) => {
     if(a[sortBy] < b[sortBy])
     {
      return 1*multiplier*order;
     }
     else if(b[sortBy] < a[sortBy])
     {
       return -1*multiplier*order;
     }
     else {
       return 0;
     }
    });
    return array;
   }
  }

