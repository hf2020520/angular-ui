import { Component } from '@angular/core';

@Component({
    templateUrl: './input-example.component.html'
})
export class InputExampleComponent {
    range: number = 0;

    checkbox1: boolean = false;
    checkbox2: boolean = false;
    checkbox3: boolean = false;
    checkbox4: boolean = false;
    checkbox5: boolean = false;
    checkbox6: boolean = false;

    radio: string = '';
}