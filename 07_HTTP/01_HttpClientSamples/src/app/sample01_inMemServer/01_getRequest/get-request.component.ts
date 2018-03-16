import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

// Примеры из директории sample01_inMemServer используют angular2-in-memory-web-api
// для того чтобы тестировать приложение обрабатывая http запросы без реального сервера
// Настройка angular2-in-memory-web-api происходит в app.module
// Логика серверной стороны находиться в файле inMemoryServer.ts

@Component({
    selector: "get-request",
    templateUrl: "get-request.component.html"
})
export class GetRequestComponent {

    itemArray;

    constructor(private http: HttpClient) { }

    // this.itemArray = result.json().data

    clickHandler() {
        // this.http.get - отправка get запроса по указанному адресу
        // метод возвращает объект Observable из библиотеки RxJS
        // с помощью метода subscribe подписываемся на событие
        // событие произойдет после получение ответа от сервера.
        this.http.get("app/items").subscribe(
            result => { this.itemArray = result },
            error => console.log(error.statusText)
        );
    }
}
