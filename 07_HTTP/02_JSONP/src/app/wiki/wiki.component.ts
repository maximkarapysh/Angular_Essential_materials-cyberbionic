import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
	selector: 'app-wiki',
	templateUrl: './wiki.component.html',
	styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

	public items: any[] = [];

	constructor(private wiki: WikiService) { }

	ngOnInit() {
	}

	public search(term: string): void {
		this.wiki.search(term).subscribe( response => this.items = response)
	}

}
