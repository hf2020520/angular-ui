import { Component } from '@angular/core';

@Component({
    templateUrl: './pagination-example.component.html'
})
export class PaginationExampleComponent {
    currentPage: number = 1;
    pages: number = 20;

    toPage(newPageNumber: number) {
        this.currentPage = newPageNumber;
        // doSomething...
    }
}