import { Component } from "@angular/core";

@Component({
    selector: "propert-binding",
    templateUrl: "property-binding.component.html",
    styles: ["img { margin: 20px}"]
})
export class PropertyBindingComponent {
    imageSrc: string = "./../assets/images/databinding.png";
    imageTitle: string = "Data Binding in Angular 2";
    flag: boolean = false;
}