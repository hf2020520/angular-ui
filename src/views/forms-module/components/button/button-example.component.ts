import { Component } from '@angular/core';

@Component({
    templateUrl: './button-example.component.html'
})
export class ButtonExampleComponent {
    isLoading: boolean = false;

    loadData() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }
}