import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

/*
    Guard - механизм для выполнения проверок перед активацией и деактивацией маршрута

    CanActivate - Определяет возможность активации маршрута
    CanActivateChild - Определяет возможность активации дочерних маршрутов текущего маршрута
    CanDeactivate - Определяет можно ли уйти с текущего маршрута
    CanLoad - Определяет может ли модуль загрузиться с использованием lazy loading

    Установка объектов Guard происходит при настройке маршрутизации.
    В данном примере Guard используется в файле /admin/admin-routing.module.ts
    Также, для AuthGuard необходимо установить провайдер (в данном примере провайдер установлен в app.module.ts)
*/


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    // ActivatedRouteSnapshot - информация о маршруте связанного с загруженым компонентом.
    // RouterStateSnapshot - состояние маршрута в определенный отрезок времени.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            this.authService.redirectUrl = state.url;

            this.router.navigate(["/login"]);
            return false;
        }

    }
}