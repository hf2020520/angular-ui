## 在组件中注入`NavController`

通过调用`NavController`的`push`方法，且传入下一个视图的组件，即可导航到下一个组件。
**push方法，只能在同级导航**，如果要跨级导航，可以通过`rxjs`的发布订阅来实现。

```typescript
import { Component } from '@angular/core';
import { NavController } from 'tanbo-ui';

import { NextComponent } from './component/next.component';

@Component({
    template: `
        <button (click)="goToPage()">点击去下一页</button>
    `
})
export class DemoComponent {
    constructor(private navController: NavController) {
        
    }
    
    goToPage() {
        this.navController.push(NextComponent);
    }
}

```

### NavController.push
导航到指定视图
```typescript
NavController.push(component: any, params?: {[key: string]: any}): void;
```

### NavController.push
返回到上一个视图
```typescript
NavController.pop(): void;
```

### NavController.getParam
通过key获取，最新的导航参数
```typescript
NavController.getParam(key: string): any;
```