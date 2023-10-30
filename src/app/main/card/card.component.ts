import { Component } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	title = 'Equilibrium #3429';
	description = 'Our Equilibrium collection promotes balance and calm.';
	ethereumAmount = 0.041;
	remainingTime = 3;
	author = {
		name: 'Jules Wyvern',
		imageSrc: '/assets/images/avatar.png'
	};
}
