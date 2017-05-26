import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiFormsModule } from 'tanbo-ui';

import { DocViewModule } from '../doc-view-module/doc-view.module';

import { routes } from './forms.routing';

import { NavComponent } from './components/nav.component';
import { ButtonExampleComponent } from './components/button/button-example.component';
import { InputExampleComponent } from './components/input/input-example.component';
import { SelectExampleComponent } from './components/select/select-example.component';
import { SwitchExampleComponent } from './components/switch/switch-example.component';
import { ValidateFormExampleComponent } from './components/validate-form/validate-form-example.component';
import { ValidateModelExampleComponent } from './components/validate-model/validate-model-example.component';

@NgModule({
    imports: [
        DocViewModule,
        CommonModule,
        UiFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NavComponent,
        ButtonExampleComponent,
        InputExampleComponent,
        SelectExampleComponent,
        SwitchExampleComponent,
        ValidateFormExampleComponent,
        ValidateModelExampleComponent
    ]
})
export class FormModule {
}
