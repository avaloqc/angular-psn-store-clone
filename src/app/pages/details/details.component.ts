import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
	private id: string | null = '01';
	gameTitle: string = '';
	gamePrice: string = '';
	gameBanner: string = '';
	gameEdition: string = '';
	gamePublisher: string = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
		console.log(this.id);
	}
}
