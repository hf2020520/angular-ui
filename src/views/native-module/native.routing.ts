import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavControllerComponent } from './components/nav-controller/nav-controller.component';
import { ViewEnterComponent } from './components/view-enter/view-enter.component';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'intro',
        component: IntroComponent,
        data: {
            doc: require('./components/intro/intro.component.md')
        }
    }, {
        path: 'nav-controller',
        component: NavControllerComponent,
        data: {
            doc: require('./components/nav-controller/nav-controller.component.md')
        }
    }, {
        path: 'view-enter',
        component: ViewEnterComponent,
        data: {
            doc: require('./components/view-enter/view-enter.component.md')
        }
    }, {
        path: 'view-leave',
        component: ViewLeaveComponent,
        data: {
            doc: require('./components/view-leave/view-leave.component.md')
        }
    }]
}];