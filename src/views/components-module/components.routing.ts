import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { ConfirmExampleComponent } from './components/confirm/confirm-example.component';
import { DropDownExampleComponent } from './components/drop-down/drop-down-example.component';
import { NotifyExampleComponent } from './components/notify/notify-example.component';
import { PaginationExampleComponent } from './components/pagination/pagination-example.component';
import { SlideExampleComponent } from './components/slide/slide-example.component';
import { StarrySkyExampleComponent } from './components/starry-sky/starry-sky-example.component';
import { ToolbarExampleComponent } from './components/toolbar/toolbar-example.component';
import { ViewLoadingBarExampleComponent } from './components/view-loading-bar/view-loading-bar-example.component';
import { ConfirmServiceExampleComponent } from './components/confirm-controller/confirm-controller-example.component';
import { NotifyServiceExampleComponent } from './components/notify-controller/notify-controller-example.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'confirm',
        component: ConfirmExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/confirm/confirm-example.component'),
            html: require('!!raw-loader!./components/confirm/confirm-example.component.html'),
            doc: require('./components/confirm/confirm-example.component.md')
        }
    }, {
        path: 'drop-down',
        component: DropDownExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/drop-down/drop-down-example.component'),
            html: require('!!raw-loader!./components/drop-down/drop-down-example.component.html'),
            doc: require('./components/drop-down/drop-down-example.component.md')
        }
    }, {
        path: 'notify',
        component: NotifyExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/notify/notify-example.component'),
            html: require('!!raw-loader!./components/notify/notify-example.component.html'),
            doc: require('./components/notify/notify-example.component.md')
        }
    }, {
        path: 'pagination',
        component: PaginationExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/pagination/pagination-example.component'),
            html: require('!!raw-loader!./components/pagination/pagination-example.component.html'),
            doc: require('./components/pagination/pagination-example.component.md')
        }
    }, {
        path: 'slide',
        component: SlideExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/slide/slide-example.component'),
            html: require('!!raw-loader!./components/slide/slide-example.component.html'),
            doc: require('./components/slide/slide-example.component.md'),
            css: require('!!raw-loader!./components/slide/slide-example.component.scss')
        }
    }, {
        path: 'starry-sky',
        component: StarrySkyExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/starry-sky/starry-sky-example.component'),
            html: require('!!raw-loader!./components/starry-sky/starry-sky-example.component.html'),
            doc: require('./components/starry-sky/starry-sky-example.component.md'),
            css: require('!!raw-loader!./components/starry-sky/starry-sky-example.component.scss')
        }
    }, {
        path: 'toolbar',
        component: ToolbarExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/toolbar/toolbar-example.component'),
            html: require('!!raw-loader!./components/toolbar/toolbar-example.component.html'),
            doc: require('./components/toolbar/toolbar-example.component.md')
        }
    }, {
        path: 'view-loading-bar',
        component: ViewLoadingBarExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/view-loading-bar/view-loading-bar-example.component'),
            html: require('!!raw-loader!./components/view-loading-bar/view-loading-bar-example.component.html'),
            doc: require('./components/view-loading-bar/view-loading-bar-example.component.md')
        }
    }, {
        path: 'confirm-controller',
        component: ConfirmServiceExampleComponent,
        data: {
            doc: require('./components/confirm-controller/confirm-controller-example.component.md')
        }
    }, {
        path: 'notify-controller',
        component: NotifyServiceExampleComponent,
        data: {
            doc: require('./components/notify-controller/notify-controller-example.component.md')
        }
    }]
}];