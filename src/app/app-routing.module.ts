import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';


const routes: Routes = [
  {path:'',redirectTo:'top-posts',pathMatch:'full'},
  { path:'top-posts',component:TopPostsComponent},
 
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
