import { NgModule } from '@angular/core';
import  { MatButtonModule,MatIconModule,MatToolbarModule} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponent = [
  MatButtonModule,
  MatMenuModule,MatIconModule,MatToolbarModule,
  MatTabsModule,MatGridListModule
]


@NgModule({
  
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
