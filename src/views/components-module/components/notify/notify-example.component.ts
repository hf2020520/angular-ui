import { Component } from '@angular/core';
import { NotifyService, NotifyConfig } from 'tanbo-ui';

@Component({
    templateUrl: './notify-example.component.html'
})
export class NotifyExampleComponent {
    constructor(private notifyService: NotifyService) {
    }

    show() {
        let config: NotifyConfig = {
            autoHide: true,
            content: '你提供的消息'
        };
        this.notifyService.push(config);
    }
}