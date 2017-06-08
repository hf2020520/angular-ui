## 实现`uiOnViewLeave`方法

每次组件离开主视图时，都会调用该方法，如果组件将被销毁，调用时机在`ngOnDestroy`之前。

```typescript
import { Component } from '@angular/core';
import { OnViewLeave } from 'tanbo-ui';

@Component({
    template: `
        demoHTML
    `
})
export class DemoComponent implements OnViewLeave {
    
    uiOnViewLeave() {
        console.log('组件出去了！');
    }
}
```