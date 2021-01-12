import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, value: string): any {

    var multiplier =1;
    if(value == 'name'){
      multiplier =-1;
    }

   array.sort((a:any, b:any) => {
     if(a[value] < b[value])
     {
      return 1*multiplier;
     }
     else if(b[value] < a[value])
     {
       return -1*multiplier;
     }
     else {
       return 0;
     }
    });
    return array;
   }
  }

