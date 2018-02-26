import { Component } from "@angular/core";

@Component({
    selector: "ngiftemplate-sample",
    templateUrl: "ng-if.component.html"
})
export class NgIfTemplateComponent { 
    isVisible: boolean = true;

    hide() {
        this.isVisible = false;
    }
}