import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

	getData(): any {

		return ["logan",
			"mitch",
			"owen",
			"jasper",
			"chris",
			"sue",
			"noah"];
	
	}

}