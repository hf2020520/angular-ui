import { Component } from '@angular/core';
import { NotifyController } from 'tanbo-ui';

@Component({
    selector: 'ui-demo',
    templateUrl: 'app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    constructor(private notify: NotifyController) {
    }
    show(){
        this.notify.push({
            content: 'tset'
        })
    }
}
