import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiNativeModule } from 'tanbo-ui';

import { DocViewModule } from '../doc-view-module/doc-view.module';

import { routes } from './native.routing';
import { PageTransferStationService } from './services/page-transfer-station.service';

import { NavComponent } from './components/nav.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavControllerComponent } from './components/nav-controller/nav-controller.component';
import { ViewEnterComponent } from './components/view-enter/view-enter.component';
import { ViewLeaveComponent } from './components/view-leave/view-leave.component';

import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './demo/components/home/home.component';
import { Tab1Component } from './demo/components/tab1/tab1.component';
import { Child1Component } from './demo/components/tab1/child1/child1.component';
import { Child2Component } from './demo/components/tab1/child2/child2.component';
import { Tab2Component } from './demo/components/tab2/tab2.component';
import { Tab3Component } from './demo/components/tab3/tab3.component';
import { Tab4Component } from './demo/components/tab4/tab4.component';
import { DetailComponent } from './demo/components/detail/detail.component';
import { ListComponent } from './demo/components/list/list.component';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        UiNativeModule,
        DocViewModule
    ],
    declarations: [
        NavComponent,
        IntroComponent,
        NavControllerComponent,
        ViewEnterComponent,
        ViewLeaveComponent,

        DemoComponent,
        HomeComponent,
        Tab1Component,
        Child1Component,
        Child2Component,
        Tab2Component,
        Tab3Component,
        Tab4Component,
        ListComponent,
        DetailComponent
    ],
    entryComponents: [
        HomeComponent,
        Tab1Component,
        Child1Component,
        Child2Component,
        Tab2Component,
        Tab3Component,
        Tab4Component,
        ListComponent,
        DetailComponent
    ],
    providers: [
        PageTransferStationService
    ]
})
export class NativeModule {
}