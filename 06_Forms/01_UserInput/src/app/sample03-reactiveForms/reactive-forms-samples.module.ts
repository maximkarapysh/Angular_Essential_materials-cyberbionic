import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Для работы с реактивными формами необходимо использовать модуль ReactiveFormsModule
// вместо ReactiveForms
import { ReactiveFormsModule } from "@angular/forms";
import { FormControlComponent, FormControlValComponent, FormBuilderComponent, CustomValidatorsComponent, ReactiveFormComponent } from "./index";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [FormControlComponent, FormControlValComponent, ReactiveFormComponent, FormBuilderComponent, CustomValidatorsComponent]
})
export class ReactiveFormsSamplesModule { }