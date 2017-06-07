import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiNativeModule } from 'tanbo-ui';

import { routes } from './native.routing';

import { NavComponent } from './components/nav.component';

import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './demo/components/home/home.component';
import { Tab1Component } from './demo/components/tab1/tab1.component';
import { Child1Component } from './demo/components/tab1/child1/child1.component';
import { Child2Component } from './demo/components/tab1/child2/child2.component';
import { Tab2Component } from './demo/components/tab2/tab2.component';
import { Tab3Component } from './demo/components/tab3/tab3.component';
import { Tab4Component } from './demo/components/tab4/tab4.component';

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        UiNativeModule
    ],
    declarations: [
        NavComponent,
        DemoComponent,
        HomeComponent,
        Tab1Component,
        Child1Component,
        Child2Component,
        Tab2Component,
        Tab3Component,
        Tab4Component,
    ],
    entryComponents: [
        HomeComponent,
        Tab1Component,
        Child1Component,
        Child2Component,
        Tab2Component,
        Tab3Component,
        Tab4Component
    ]
})
export class NativeModule {
}