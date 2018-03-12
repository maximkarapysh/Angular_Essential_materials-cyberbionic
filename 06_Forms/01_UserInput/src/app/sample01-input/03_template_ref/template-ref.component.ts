import { Component } from "@angular/core";

@Component({
    templateUrl: "template-ref.component.html",
    selector: "template-ref-sample"
})
export class TemplateRefSampleComponent {
    message: string;

    onKeyup(data) {
        this.message = data;
    }
}