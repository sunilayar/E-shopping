import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products1'
})
export class Products1Pipe implements PipeTransform {
  transform(items: any[],searchitem:string): any {
    
    if(searchitem === '#shoes'){
      return items;
    }
    
    else if(searchitem ==="" || searchitem!='shoes'){
      return items.filter(a=>{
        return false;
      })
    }
           


}

}
