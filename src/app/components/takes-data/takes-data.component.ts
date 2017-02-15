import { Component, Input } from '@angular/core';

@Component({
	selector: 'takes-data',
	templateUrl: './takes-data.component.html',
	styleUrls: ['./takes-data.component.css']
})
export class TakesData {

	@Input("username") username: string;
	@Input("colorIsActive") colorIsActive: boolean;
	
}