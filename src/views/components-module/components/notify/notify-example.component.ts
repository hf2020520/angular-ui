import { Component } from '@angular/core';
import { NotifyController, NotifyConfig, NotifyType } from 'tanbo-ui';

@Component({
    templateUrl: './notify-example.component.html'
})
export class NotifyExampleComponent {
    constructor(private notifyController: NotifyController) {
    }

    show() {
        let config: NotifyConfig = {
            content: '你提供的消息',
            autoHide: true, // 可选，是否自动隐藏
            type: NotifyType.Primary, // 可选，显示风格
            time: 5000 // 可选，停留时间，如果autoHide为false，则此项不生效
        };
        this.notifyController.push(config);
    }
}