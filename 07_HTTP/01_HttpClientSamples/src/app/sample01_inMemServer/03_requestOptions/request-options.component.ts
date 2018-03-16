import { Component, OnInit } from "@angular/core";
// import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: "request-options",
    templateUrl: "request-options.component.html"
})
export class RequestOptionsComponent implements OnInit {

    url: string = "app/items";
    id: number;
    name: string;
    itemArray;

    ngOnInit() {
        this.http.get(this.url).subscribe(
            result => this.itemArray = result,
            error => console.log(error.statusText)
        );
    }

    constructor(private http: HttpClient) { }

    clickHandler() {
        // определение пользовательских заголовков
        let myHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "X-MyHeader": "Hello world"
        });
        // создание опций для запроса
        let options = { headers: myHeaders };

        // создание объекта для отправки на сервер
        let data = {
            id: this.id,
            name: this.name
        };
        // post запроса с указанием адреса, данных и опций
        // для того чтобы увидеть данные запроса в Developer Tools во вкладке Network 
        // закомментируйте строку импорта и настройки модуля InMemoryWebApiModule в root module (app.module.ts)
        this.http.post(this.url, data, options).subscribe(
            result => {
                this.itemArray.push(result);
            },
            error => console.log(error)
        );
    }
}
