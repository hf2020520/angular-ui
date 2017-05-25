import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocViewModule } from '../doc-view-module/doc-view.module';
import { UiComponentsModule, ConfirmService, NotifyService } from 'tanbo-ui';

import { routes } from './components.routing';

import { NavComponent } from './components/nav.component';
import { ConfirmExampleComponent } from './components/confirm/confirm-example.component';
import { DropDownExampleComponent } from './components/drop-down/drop-down-example.component';
import { NotifyExampleComponent } from './components/notify/notify-example.component';

@NgModule({
    imports: [
        CommonModule,
        UiComponentsModule,
        DocViewModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NavComponent,
        ConfirmExampleComponent,
        DropDownExampleComponent,
        NotifyExampleComponent
    ],
    providers: [
        ConfirmService,
        NotifyService
    ]
})
export class ComponentsModule {
}