import { Component } from "@angular/core";
// import { Http, URLSearchParams } from "@angular/http";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
    selector: "search-params",
    templateUrl: "search-params.component.html"
})
export class SearchParamsComponent {

    url: string = "app/items";

    constructor(private http: HttpClient) { }

    clickHandler() {

        let params = new HttpParams();
        params.set("a", "1");
        params.set("b", "value");

        // метод get с параметром params будет выполнять запрос по следующему адресу
        // http://localhost:3000/app/items?a=1&b=value
        // Для того чтобы увидеть запрос в браузере закомментируйте настройку in memory web api в app.module.ts 
        this.http.get(this.url, { params: params })
            .subscribe(
                response => console.log("success"),
                error => console.log("error")
            );
    }
}
