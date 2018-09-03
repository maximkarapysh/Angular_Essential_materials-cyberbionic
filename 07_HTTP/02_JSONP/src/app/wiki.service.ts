import { pipe, Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class WikiService {

	private wikiUrl: string = 'http://ru.wikipedia.org/w/api.php';

	constructor(private http: HttpClient) { }

	public search(term: string) {
		return this.http
			.jsonp(`${this.wikiUrl}?search=${term}&action=opensearch&format=json`, `callback`).pipe(
			map(response => {
				let names = response[1];
				let descriptions = response[2];
				let links = response[3];
				let length = names.length;

				let result: any[] = [];

				for (let i = 0; i < length; i++) {
					result.push({
						name: names[i],
						link: links[i],
						description: descriptions[i]
					});
				}

				return result;
			}));
	}

	//  http://ru.wikipedia.org/w/api.php?search=spain&action=opensearch&format=json&callback=maxim

}
