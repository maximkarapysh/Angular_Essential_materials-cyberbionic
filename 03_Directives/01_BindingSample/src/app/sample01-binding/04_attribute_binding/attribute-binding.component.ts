import { Component } from "@angular/core";

@Component({
    selector: "attribute-binding",
    templateUrl: "attribute-binding.component.html"
})
export class AttributeBindingComponent {
    value: number = 40;

    increase() {
        this.value ++;
    }

    decrease() {
        this.value --;
    }
}