import { Component } from '@angular/core';

@Component({
    templateUrl: './validate-model-example.component.html'
})
export class ValidateModelExampleComponent {
    data: any = {
        mobilePhone: '',
        verifyCode: ''
    };

    submit() {
        alert('通过了校验，提交成功了');
    }
}