import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: '/base-info/intro',
    pathMatch: 'full'
}, {
    path: 'base-info',
    redirectTo: '/base-info/intro',
    pathMatch: 'full'
}, {
    path: 'components',
    redirectTo: '/components/confirm',
    pathMatch: 'full'
}, {
    path: 'directives',
    redirectTo: 'directives/stop-propagation',
    pathMatch: 'full'
}, {
    path: 'forms',
    redirectTo: 'forms/button',
    pathMatch: 'full'
}, {
    path: 'base-info',
    loadChildren() {
        return new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./intro-module/intro.module').IntroModule);
            });
        });
    }
}, {
    path: 'components',
    loadChildren() {
        return new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./components-module/components.module').ComponentsModule);
            });
        });
    }
}, {
    path: 'directives',
    loadChildren() {
        return new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./directives-module/directives.module').DirectivesModule);
            });
        });
    }
}, {
    path: 'forms',
    loadChildren() {
        return new Promise(resolve => {
            (require as any).ensure([], require => {
                resolve(require('./forms-module/forms.module').FormModule);
            });
        });
    }
}];