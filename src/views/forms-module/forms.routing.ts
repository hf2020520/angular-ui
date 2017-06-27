import { Routes } from '@angular/router';

import { NavComponent } from './components/nav.component';
import { ButtonExampleComponent } from './components/button/button-example.component';
import { RadioExampleComponent } from './components/radio/radio-example.component';
import { CheckboxExampleComponent } from './components/checkbox/checkbox-example.component';
import { RangeExampleComponent } from './components/range/range-example.component';
import { DateExampleComponent } from './components/date/date-example.component';
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
            html: require('!!raw-loader!./components/button/button-example.component.html'),
            doc: require('./components/button/button-example.component.md')
        }
    }, {
        path: 'radio',
        component: RadioExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/radio/radio-example.component'),
            html: require('!!raw-loader!./components/radio/radio-example.component.html'),
            doc: require('./components/radio/radio-example.component.md')
        }
    }, {
        path: 'checkbox',
        component: CheckboxExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/checkbox/checkbox-example.component'),
            html: require('!!raw-loader!./components/checkbox/checkbox-example.component.html'),
            doc: require('./components/checkbox/checkbox-example.component.md')
        }
    }, {
        path: 'range',
        component: RangeExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/range/range-example.component'),
            html: require('!!raw-loader!./components/range/range-example.component.html'),
            doc: require('./components/range/range-example.component.md')
        }
    }, {
        path: 'date',
        component: DateExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/date/date-example.component'),
            html: require('!!raw-loader!./components/date/date-example.component.html'),
            doc: require('./components/date/date-example.component.md')
        }
    }, {
        path: 'select',
        component: SelectExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/select/select-example.component'),
            html: require('!!raw-loader!./components/select/select-example.component.html'),
            doc: require('./components/select/select-example.component.md')
        }
    }, {
        path: 'switch',
        component: SwitchExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/switch/switch-example.component'),
            html: require('!!raw-loader!./components/switch/switch-example.component.html'),
            doc: require('./components/switch/switch-example.component.md')
        }
    }, {
        path: 'validate-form',
        component: ValidateFormExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/validate-form/validate-form-example.component'),
            html: require('!!raw-loader!./components/validate-form/validate-form-example.component.html'),
            doc: require('./components/validate-form/validate-form-example.component.md')
        }
    }, {
        path: 'validate-model',
        component: ValidateModelExampleComponent,
        data: {
            ts: require('!!raw-loader!./components/validate-model/validate-model-example.component'),
            html: require('!!raw-loader!./components/validate-model/validate-model-example.component.html'),
            doc: require('./components/validate-model/validate-model-example.component.md')
        }
    }]
}];