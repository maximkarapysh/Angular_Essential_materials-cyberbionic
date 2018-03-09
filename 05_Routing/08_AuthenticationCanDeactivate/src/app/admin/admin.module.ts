
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { AdminRoutingModule } from "./admin-routing.module";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminHomeComponent,
        ManagePhrasesComponent,
        ManageUsersComponent]
})
export class AdminModule { }