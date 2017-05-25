# 安装


## 安装前准备
请确保你本地已安装[nodejs](http://nodejs.org)最新版本。
请确保你项目中的[angular](https://angular.io/)版本不低于4.0。
如果没你还没有创建项目，可通过[quick-start-cli](https://github.com/18616392776/quick-start-cli)来快速生成一个angular的项目。

## 安装tanbo-ui
```
npm install tanbo-ui --save
```
## 在你的项目中引入tanbo-ui

```typescript
// 这里是依赖的样式表，你也可以直接通过link标签引入
// 如果你想自定义样式，你可以通过taobo-ui提供的scss源文件来修改其中的样式
// scss文件目录 node_modules/tanbo-ui/bundles/assets/scss/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiFormsModule, UiDirectivesModule, UiComponentsModule, ConfirmService, NotifyService } from 'tanbo-ui';
import 'tanbo-ui/bundles/tanbo-ui.min.css'; 


@NgModule({
    imports: [
        /* ..other modules.. */
        UiFormsModule,
        UiDirectivesModule,
        UiComponentsModule,
        FormsModule, // FormsModule 一定要在 UiFormsModule 之后
        BrowserModule,
        BrowserAnimationsModule // UiComponentsModule 依赖动画模块
    ],
    providers: [
        ConfirmService,
        NotifyService
    ]
})

export class AppModule {
}
```