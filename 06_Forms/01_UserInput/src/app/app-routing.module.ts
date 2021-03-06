import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventSampleComponent, EventObjectSampleComponent, TemplateRefSampleComponent, KeyEnterSampleComponent, BlurSampleComponent, MyListComponent } from './sample01-input';
import { UserFormComponent, StylesSampleComponent, UserForm2Component, UserForm3Component, FormErrorsComponent, UserForm4Component, UserForm5Component } from './sample02-forms';
import { FormControlComponent, FormControlValComponent, FormBuilderComponent, ReactiveFormComponent, CustomValidatorsComponent } from './sample03-reactiveForms';

const routes: Routes = [
  {
    path: "",
    redirectTo: "sample1",
    pathMatch: "full"
  },
  {
    path: "sample1",
    component: EventSampleComponent
  },
  {
    path: "sample2",
    component: EventObjectSampleComponent
  },
  {
    path: "sample3",
    component: TemplateRefSampleComponent
  },
  {
    path: "sample4",
    component: KeyEnterSampleComponent
  },
  {
    path: "sample5",
    component: BlurSampleComponent
  },
  {
    path: "sample6",
    component: MyListComponent
  },
  {
    path: "sample7",
    component: UserFormComponent
  },
  {
    path: "sample8",
    component: StylesSampleComponent
  },
  {
    path: "sample9",
    component: UserForm2Component
  },
  {
    path: "sample10",
    component: UserForm3Component
  },
  {
    path: "sample11",
    component: FormErrorsComponent
  },
  {
    path: "sample12",
    component: UserForm4Component
  },
  {
    path: "sample13",
    component: UserForm5Component
  },
  {
    path: "sample14",
    component: FormControlComponent
  },
  {
    path: "sample15",
    component: FormControlValComponent
  },
  {
    path: "sample16",
    component: FormBuilderComponent
  },
  {
    path: "sample17",
    component: ReactiveFormComponent
  },
  {
    path: "sample18",
    component: CustomValidatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
