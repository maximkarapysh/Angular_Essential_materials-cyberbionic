import { Component } from "@angular/core";

@Component({
    selector: "item",
    templateUrl: "item.component.html"
})
export class ItemComponent { 
    data: number;

    changeData() {
        this.data = new Date().getTime(); 
    }
}