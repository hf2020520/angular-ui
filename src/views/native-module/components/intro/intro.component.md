## 在你的项目中引入`UiNativeModule`

```typescript
import { NgModule } from '@angular/core';
import { UiNativeModule } from 'tanbo-ui';

// 这里是依赖的样式表，你也可以直接通过link标签引入
// 如果你想自定义样式，你可以通过taobo-ui提供的scss源文件来修改其中的样式
// scss文件目录 node_modules/tanbo-ui/bundles/assets/scss/
import 'tanbo-ui/bundles/tanbo-ui-native.min.css'; 


@NgModule({
    imports: [
        /* ..other modules.. */
        UiNativeModule
    ]
})

export class AppModule {
}
```