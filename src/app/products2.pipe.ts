import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products2'
})
export class Products2Pipe implements PipeTransform {

  transform(items: any[],searchitem:string): any {
    
    if(searchitem === '#sandals #shoes'){
      return items;
    }
    
    else if(searchitem ==="" || searchitem!='#sandals #shoes'){
      return items.filter(a=>{
        return false;
      })
    }

}
}
