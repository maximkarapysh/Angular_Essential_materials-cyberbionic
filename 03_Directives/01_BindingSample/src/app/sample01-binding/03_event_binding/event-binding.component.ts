import { Component } from "@angular/core";

@Component({
    selector: "event-binding",
    templateUrl: "event-binding.component.html"
})
export class EventBindingComponent {
    onSave() {
        alert("saved.");
    }

    testEvent(event) {
        for (let prop in event) {
            console.log(prop + " = " + event[prop]);
        }
    }
}