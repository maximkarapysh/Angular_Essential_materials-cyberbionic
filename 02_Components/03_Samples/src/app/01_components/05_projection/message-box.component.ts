import { Component } from "@angular/core";

@Component({
    selector: "message-box",
    templateUrl: "message-box.component.html",
    styleUrls: ["message-box.component.css"]
})
export class MessageBoxComponent {
    visible: boolean = true;

    hide() {
        this.visible = false;
    }
}