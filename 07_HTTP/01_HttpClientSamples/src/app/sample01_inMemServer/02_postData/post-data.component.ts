import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
    selector: "post-data",
    templateUrl: "post-data.component.html"
})
export class PostDataComponent implements OnInit {

    id: number;
    name: string;
    itemArray;

    ngOnInit() {
        this.http.get("app/items").subscribe(
            result => this.itemArray = result,
            error => console.log(error.statusText)
        );
    }

    constructor(private http: HttpClient) { }

    clickHandler() {
        this.http.post("app/items", {
            id: this.id,
            name: this.name
        }).subscribe(
            result => {
                 this.itemArray.push(result);
            },
            error => console.log(error.statusText)
            );
    }
}
