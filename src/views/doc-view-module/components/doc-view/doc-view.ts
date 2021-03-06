import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const md = markdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (e) {
                console.log(e);
            }
        }

        return '';
    }
});

@Component({
    selector: 'doc-view',
    templateUrl: './doc-view.html',
    styleUrls: ['./doc-view.scss']
})
export class DocViewComponent implements OnInit {
    showType: string = 'example';

    docHtml: string = '';
    styleSheetHtml: string = '';
    templateHtml: string = '';
    tsHtml: string = '';

    isShowExample: boolean = true;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const value = this.activatedRoute.data['value'];
        if (value) {
            const doc = value.doc || '';
            const styleSheet = value.css || '';
            const ts = value.ts || '';
            let template = value.html || '';
            template = template.replace(/^[\s\n]*<doc-view>[\s\n]*|[\s\n]*<\/doc-view>[\s\n]*$/g, '');
            template = template.replace(/^\s\s/mg, '');
            this.isShowExample = styleSheet || template || ts;
            if (doc) {
                let docs = doc.split('````');

                this.docHtml = docs.map(item => {
                    if (item.indexOf('html\n') === 0) {
                        return item.replace(/^html\n/, '');
                    }
                    return md.render(item);
                }).join('');
            }
            if (styleSheet) {
                this.styleSheetHtml = md.render('```scss\n' + styleSheet + '\n```');
            }
            if (template) {

                this.templateHtml = md.render('```html\n' + template + '\n```');
            }
            if (ts) {
                this.tsHtml = md.render('```ts\n' + ts + '\n```');
            }
        }

    }

    setShowType(type) {
        this.showType = type;
    }
}