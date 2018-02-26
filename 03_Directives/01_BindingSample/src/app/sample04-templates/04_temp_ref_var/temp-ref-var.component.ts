import { Component } from "@angular/core";

@Component({
    selector: "temprefvar-sample",
    templateUrl: "temp-ref-var.component.html"
})
export class TempRefVarComponent {
    result: number;

    calculateSum(x, y) {
        this.result = +x + +y;
    }
}