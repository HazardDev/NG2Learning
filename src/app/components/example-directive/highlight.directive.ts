import { Directive, ElementRef, Input } from '@angular/core';

@Directive({selector: '[myBlueHighlight]'})
export class HighlightDirective {
	constructor(el: ElementRef){
		el.nativeElement.style.backgroundColor = "skyblue";
	}
}