
import {of as observableOf,  Observable } from 'rxjs';
// подключение необходимых методов для работы с Observable
import {tap, delay} from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    // URL для перенаправления после авторизации
    redirectUrl: string;

    login(login: string, password: string): Observable<boolean> {
        return observableOf(true).pipe(       // добавление элементов в последовательность объекта
            delay(1000),    // задержка на 1 сек.
            tap(val => {    // выполнение действия для каждого элемента в последовательности
                if (login == "admin" && password == "qwerty")
                    this.isLoggedIn = true;
                    return this.isLoggedIn;
            }),);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
