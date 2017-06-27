import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewComponent } from './components/doc-view/doc-view';
import { HtmlDirective } from './directives/html';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DocViewComponent,
        HtmlDirective
    ],
    exports: [
        DocViewComponent,
        HtmlDirective
    ]
})
export class DocViewModule {
}