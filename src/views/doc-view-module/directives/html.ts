import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[docHtml]'
})
export class HtmlDirective implements OnInit {
    @Input()
    docHtml: string = '';

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.innerHTML = this.docHtml;
    }
}