import { Component } from "@angular/core";

@Component({
    templateUrl: "events.component.html",
    selector: "events-sample"
})
export class EventSampleComponent {
    message: string;

    clickHandler() {
        this.message = new Date().toString();
    }
}