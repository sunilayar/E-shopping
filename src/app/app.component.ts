import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 searchText:string
  public sandals:any = ["flatshoes 16k posts"," heels 5k posts"]
  public shoes:any = ["redshoes 10k posts","sportshoes 6k posts"]
  public all:any = ["flatshoes 16k posts"," heels 5k posts","redshoes 10k posts","sportshoes 6k posts"]
}
