import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Product } from "./product";

@Injectable()
export class ProductService {

    // адрес сервиса
    private url = "http://localhost:2403/products"

    constructor(private http: HttpClient) {}

    // Отправка GET запроса нв сервер
    public getProducts() {
        return this.http.get(this.url);
    }

    public getProduct(id: string) {
        return this.http.get(this.url + "/" + id);
    }

     // Отправка POST запроса на сервер, добавление нового продукта в базу.
     public addProduct(product: Product) {
        return this.http.post(this.url, product)
    }

    // Отправка PUT запроса и обновление продукта в базе.
    public updateProduct(product: Product) {
        return this.http.put(this.url + "/" + product.id, product)
    }

    // Отправка DELETE запроса и удаление продукта из базы.
    public deleteProduct(product: Product) {
        return this.http.delete(this.url + "/" + product.id)
    }

}