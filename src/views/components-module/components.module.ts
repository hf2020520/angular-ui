import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocViewModule } from '../doc-view-module/doc-view.module';
import { UiComponentsModule } from 'tanbo-ui';

import { routes } from './components.routing';

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
        NotifyExampleComponent,
        PaginationExampleComponent,
        SlideExampleComponent,
        StarrySkyExampleComponent,
        ToolbarExampleComponent,
        ViewLoadingBarExampleComponent,
        ConfirmServiceExampleComponent,
        NotifyServiceExampleComponent
    ]
})
export class ComponentsModule {
}