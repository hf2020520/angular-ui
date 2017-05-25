import { Component } from '@angular/core';
import { ConfirmService, ConfirmConfig } from 'tanbo-ui';

@Component({
    templateUrl: './confirm-example.component.html'
})
export class ConfirmExampleComponent {
    constructor(private confirmService: ConfirmService) {
    }

    show() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '你触发了对话框'
        };
        this.confirmService.show(config).then(() => {
            alert('你确认了操作');
        }, () => {
            alert('你取消了操作');
        });
    }
}