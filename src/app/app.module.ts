import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProductsPipe } from './products.pipe';
import { Products1Pipe } from './products1.pipe';
import { Products2Pipe } from './products2.pipe'
@NgModule({
  declarations: [
    AppComponent,
    TopPostsComponent,
    LatestPostsComponent,
    ProductsPipe,
    Products1Pipe,
    Products2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
