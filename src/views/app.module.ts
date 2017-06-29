import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UiHttp } from 'tanbo-ui';

import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from 'tanbo-ui';

import { AppComponent } from './app';
import { routes } from './app.routing';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        UiComponentsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        UiHttp
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
