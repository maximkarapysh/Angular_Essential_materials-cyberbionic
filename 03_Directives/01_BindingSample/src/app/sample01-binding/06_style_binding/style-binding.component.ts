import { Component } from "@angular/core";

@Component({
    selector: "style-binding",
    templateUrl: "style-binding.component.html"
})
export class StyleBindingComponent {
    isHighlighted = true;
    
    getDivColor() {
        return "green";
    }
}