import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetRequestComponent, PostDataComponent, RequestOptionsComponent, SearchParamsComponent } from './sample01_inMemServer';


const routes: Routes = [
  {
    path: "",
    redirectTo: "sample1",
    pathMatch: "full"
  },
  {
    path: "sample1",
    component: GetRequestComponent
  },
  {
    path: "sample2",
    component: PostDataComponent
  },
  {
    path: "sample3",
    component: RequestOptionsComponent
  },
  {
    path: "sample4",
    component: SearchParamsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
