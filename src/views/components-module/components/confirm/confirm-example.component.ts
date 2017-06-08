import { Component } from '@angular/core';
import { ConfirmController, ConfirmConfig } from 'tanbo-ui';

@Component({
    templateUrl: './confirm-example.component.html'
})
export class ConfirmExampleComponent {
    constructor(private confirmController: ConfirmController) {
    }

    show() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '你触发了对话框'
        };
        this.confirmController.show(config).then(() => {
            alert('你确认了操作');
        }, () => {
            alert('你取消了操作');
        });
    }
}