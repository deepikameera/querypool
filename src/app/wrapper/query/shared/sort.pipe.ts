import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class sortPipe implements PipeTransform {
  transform(appliedOn: Array<number | string | any>, type:string) {
    console.log(appliedOn, type);
    switch(type){
      case 'number': return this.sortByNumber(appliedOn);
      case 'string': return this.sortByString(appliedOn);
      case 'obj' : return this.sortByObj(appliedOn);
    }
    // return appliedOn;
  }
  sortByNumber(input) {
    return input.sort((a,b) => a-b);
    /*input.sort(function(a,b){
      return a-b;
    });*/

    // for array of objects, need to sort by id
    // input.sort((obj1,obj2) => obj1.id-obj2.id);

  }
  sortByString(input) {
    return input.sort((a,b)=> a.localeCompare(b));
  }
  sortByObj(input){
      return input.sort((arr1,arr2) => arr1[0]-arr2[0]);
  }
}
