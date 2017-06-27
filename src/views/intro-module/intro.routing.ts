import { Routes } from '@angular/router';
import { NavComponent } from './components/nav.component';
import { IntroComponent } from './components/intro/intro.component';
import { InstallComponent } from './components/install/install.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorComponent } from './components/color/color.component';
import { FloatComponent } from './components/float/float.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridComponent } from './components/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { TextComponent } from './components/text/text.component';
import { HelpComponent } from './components/help/help.component';

export const routes: Routes = [{
    path: '',
    component: NavComponent,
    children: [{
        path: 'intro',
        component: IntroComponent,
        data: {
            doc: require('./components/intro/intro.component.md')
        }
    }, {
        path: 'install',
        component: InstallComponent,
        data: {
            doc: require('./components/install/install.component.md')
        }
    }, {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
            html: require('!!raw-loader!./components/buttons/buttons.component.html'),
            doc: require('./components/buttons/buttons.component.md')
        }
    }, {
        path: 'color',
        component: ColorComponent,
        data: {
            html: require('!!raw-loader!./components/color/color.component.html'),
            doc: require('./components/color/color.component.md')
        }
    }, {
        path: 'float',
        component: FloatComponent,
        data: {
            html: require('!!raw-loader!./components/float/float.component.html'),
            doc: require('./components/float/float.component.md')
        }
    }, {
        path: 'forms',
        component: FormsComponent,
        data: {
            html: require('!!raw-loader!./components/forms/forms.component.html'),
            doc: require('./components/forms/forms.component.md')
        }
    }, {
        path: 'grid',
        component: GridComponent,
        data: {
            html: require('!!raw-loader!./components/grid/grid.component.html'),
            doc: require('./components/grid/grid.component.md'),
            css: require('!!raw-loader!./components/grid/grid.component.scss')
        }
    }, {
        path: 'layout',
        component: LayoutComponent,
        data: {
            html: require('!!raw-loader!./components/layout/layout.component.html'),
            doc: require('./components/layout/layout.component.md'),
            css: require('!!raw-loader!./components/layout/layout.component.scss')
        }
    }, {
        path: 'list',
        component: ListComponent,
        data: {
            html: require('!!raw-loader!./components/list/list.component.html'),
            doc: require('./components/list/list.component.md')
        }
    }, {
        path: 'table',
        component: TableComponent,
        data: {
            html: require('!!raw-loader!./components/table/table.component.html'),
            doc: require('./components/table/table.component.md')
        }
    }, {
        path: 'text',
        component: TextComponent,
        data: {
            html: require('!!raw-loader!./components/text/text.component.html')
        }
    }, {
        path: 'help',
        component: HelpComponent,
        data: {
            html: require('!!raw-loader!./components/help/help.component.html')
        }
    }]
}];