import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { StopPropagationExampleComponent } from './components/stop-propagation/stop-propagation-example.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'stop-propagation',
        component: StopPropagationExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/stop-propagation/stop-propagation-example.component'),
            html: require('!!raw-loader!./components/stop-propagation/stop-propagation-example.component.html'),
            doc: require('./components/stop-propagation/stop-propagation-example.component.md')
        }
    }]
}];