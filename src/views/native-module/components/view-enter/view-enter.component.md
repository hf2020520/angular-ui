## 实现`uiOnViewEnter`方法

每次组件进入主视图都会调用该方法，如果组件不是缓存中的组件时，调用时机在`ngOnInit`后。

```typescript
import { Component } from '@angular/core';
import { OnViewEnter } from 'tanbo-ui';

@Component({
    template: `
        demoHTML
    `
})
export class DemoComponent implements OnViewEnter {
    
    uiOnViewEnter() {
        console.log('组件进入了！');
    }
}
```