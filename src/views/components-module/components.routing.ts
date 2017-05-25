import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { ConfirmExampleComponent } from './components/confirm/confirm-example.component';
import { DropDownExampleComponent } from './components/drop-down/drop-down-example.component';
import { NotifyExampleComponent } from './components/notify/notify-example.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'confirm',
        component: ConfirmExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/confirm/confirm-example.component'),
            html: require('./components/confirm/confirm-example.component.html'),
            doc: require('./components/confirm/confirm-example.component.md')
        }
    }, {
        path: 'drop-down',
        component: DropDownExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/drop-down/drop-down-example.component'),
            html: require('./components/drop-down/drop-down-example.component.html'),
            doc: require('./components/drop-down/drop-down-example.component.md')
        }
    }, {
        path: 'notify',
        component: NotifyExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/notify/notify-example.component'),
            html: require('./components/notify/notify-example.component.html'),
            doc: require('./components/notify/notify-example.component.md')
        }
    }]
}];