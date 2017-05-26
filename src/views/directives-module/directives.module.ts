import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiDirectivesModule } from 'tanbo-ui';

import { DocViewModule } from '../doc-view-module/doc-view.module';

import { routes } from './directives.routing';

import { NavComponent } from './components/nav.component';
import { StopPropagationExampleComponent } from './components/stop-propagation/stop-propagation-example.component';

@NgModule({
    imports: [
        UiDirectivesModule,
        CommonModule,
        DocViewModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NavComponent,
        StopPropagationExampleComponent
    ]
})
export class DirectivesModule {
}