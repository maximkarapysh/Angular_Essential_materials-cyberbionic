import { Component } from "@angular/core";

@Component({
    selector: "interpolation-smp",
    templateUrl: "interpolation.component.html"
})
export class InterpolationComponent {
    public firstName: string;
    public lastName: string;

    constructor() {
        this.firstName = "Ivan";
        this.lastName = "Ivanov";
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}