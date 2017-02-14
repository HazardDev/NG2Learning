import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'upper'
})

export class UpperPipe implements PipeTransform {
	transform(word: string): string {
		return word.toUpperCase();
	}
}