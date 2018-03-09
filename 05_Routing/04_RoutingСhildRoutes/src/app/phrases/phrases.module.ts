import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";

import { PhrasesRoutingModule } from "./phrases-routing.module";
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';

@NgModule({
    imports: [
        CommonModule,
        PhrasesRoutingModule // настройки маршрутизации для модуля PhrasesModule
    ],
    declarations: [
        PhraseDetailsComponent,
        PhraseHomeComponent,
        PhraseListComponent
    ]
})
export class PhrasesModule { }