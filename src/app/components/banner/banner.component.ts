import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
	@Input()
	gameTitle: string = 'placeholder';
	@Input()
	gamePrice: string = 'R$string 129,99';
	@Input()
	gameBanner: string = '/assets/bf4-banner.jpg';
	@Input()
	gameEdition: string = 'stringEdição Deluxe PS4 & PS5';
	@Input()
	gamePublisher: string = 'EA';
	@Input()

	ngOnInit(): void {}
}
