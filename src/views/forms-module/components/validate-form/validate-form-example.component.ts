import { Component } from '@angular/core';

@Component({
    templateUrl: './validate-form-example.component.html'
})
export class ValidateFormExampleComponent {
    data: any = {
        name: '',
        password: ''
    };

    submit() {
        alert('通过了校验，提交成功了');
    }
}