import { Component, OnInit } from '@angular/core';
import { Phrase } from './../../shared/phrase';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhraseService } from './../../shared/phrase.service';

@Component({
	selector: 'app-phrase-details',
	templateUrl: './phrase-details.component.html',
})
export class PhraseDetailsComponent implements OnInit {
	phrase: Phrase;

	// ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		private service: PhraseService) { }

	ngOnInit() {
		// params - параметры текущего маршрута. Данное свойство является Observable объектом
		// Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.
		
		// OBSERVABLE PARAMS
		// forEach - устанавливаем обработчик на каждое изменение params
		this.activatedRoute.params.forEach((params: Params) => {

			let id = +params["id"]; // конвертируем значение параметра id в тип number
			this.service
				.getPhrase(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
				.then(result => this.phrase = result);  // как только Promise перейдет в состояние resolved присваиваем его значение свойству phrase
		});
	}

	goToPhrasesList() {
		let pId = this.phrase ? this.phrase.id : null
		// Объект в массиве с сегментами пути расценивается как опциональные параметры
		// В адресной строке опциональные параметры будут разделены точкой с запятой
		this.router.navigate(["/phrases", { id: pId, param1: "test", param2: 123 }]);
	}

}
