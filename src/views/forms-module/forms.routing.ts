import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { ButtonExampleComponent } from './components/button/button-example.component';
import { InputExampleComponent } from './components/input/input-example.component';
import { SelectExampleComponent } from './components/select/select-example.component';
import { SwitchExampleComponent } from './components/switch/switch-example.component';
import { ValidateFormExampleComponent } from './components/validate-form/validate-form-example.component';
import { ValidateModelExampleComponent } from './components/validate-model/validate-model-example.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'button',
        component: ButtonExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/button/button-example.component'),
            html: require('./components/button/button-example.component.html'),
            doc: require('./components/button/button-example.component.md')
        }
    }, {
        path: 'input',
        component: InputExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/input/input-example.component'),
            html: require('./components/input/input-example.component.html'),
            doc: require('./components/input/input-example.component.md')
        }
    }, {
        path: 'select',
        component: SelectExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/select/select-example.component'),
            html: require('./components/select/select-example.component.html'),
            doc: require('./components/select/select-example.component.md')
        }
    }, {
        path: 'switch',
        component: SwitchExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/switch/switch-example.component'),
            html: require('./components/switch/switch-example.component.html'),
            doc: require('./components/switch/switch-example.component.md')
        }
    }, {
        path: 'validate-form',
        component: ValidateFormExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/validate-form/validate-form-example.component'),
            html: require('./components/validate-form/validate-form-example.component.html'),
            doc: require('./components/validate-form/validate-form-example.component.md')
        }
    }, {
        path: 'validate-model',
        component: ValidateModelExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/validate-model/validate-model-example.component'),
            html: require('./components/validate-model/validate-model-example.component.html'),
            doc: require('./components/validate-model/validate-model-example.component.md')
        }
    }]
}];