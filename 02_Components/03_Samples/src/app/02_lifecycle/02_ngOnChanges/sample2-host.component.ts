import { Component } from "@angular/core";

@Component({
    selector: "sample2-host",
    templateUrl: "sample2-host.component.html"
})
export class Sample2HostComponent {
    counter: number = 0;

    increment() {
        this.counter++;
    }
}