import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(items: any[],searchitem:string): any {
    
         if(searchitem === '#sandals'){
           return items;
         }
         
         else if(searchitem ==="" || searchitem!='sandals'){
           return items.filter(a=>{
             return false;
           })
         }
                

  
  }

}
