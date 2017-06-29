# Http服务

UiHttp是基于angular Http的二次封装，要使用UiHttp，需要先做如下准备工作。
### 在模块中引入`UiHttp`
```typescript
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UiHttp } from 'tanbo-ui';

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        // 你可以直接声明，也可以调用UiHttp.config(config: UiHttpConfig)，配置全局
        UiHttp
    ]
    /* your code */
})
export class AppModule {
}
```
### 在组件中使用

```typescript
import { Component } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Component({
    templateUrl: './example.component.html'
})
export class ExampleComponent {

    constructor(private http: UiHttp) {
    }

    getData() {
        this.http.get('/url/example').then(response => {
            alert('请求成功');
            console.log(response);
        }, error => {
            alert('请求出错了');
            console.log(error);
        });
    }
}
```


## 全局配置

你可以在全局配置http请求相关信息，后续每一次请求，都会复用相关配置，如果某些请求中有不一样的配置，你只需要在这些请求中覆盖即可。

```typescript
import { UiHttp, UiHttpConfig } from 'tanbo-ui';

const httpConfig: UiHttpConfig = {
    // apiPrefix?: string;                  api默认前缀，如：/api，可以通过这个特点，来实现nodejs http代理识别url的前缀
    // headers?: Headers;                   默认请求头信息
    // withCredentials?: boolean;           跨源请求是否带相关凭据
    // responseType?: ResponseContentType;  返回类型
    // openTimestamp?: boolean;             是否开启时间戳，以防止缓存
    // responseHandle?(response: Observable<Response>): Promise<any>;   默认返回值处理
};

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        UiHttp.config(httpConfig);
    ]
    /* your code */
})
```

## 实例方法

#### `UiRequestOptions.params: {[key:string]: any}`
params中的内容将被转换为，`key=value&key=value`的形式，即`?`号后面的字符串。
```typescript
this.http.get('/example', {
    params: {
        key: 'value'
    }
}).then(response => {
    // do Something
}, error => {
    // do Something
})
```
#### `UiRequestOptions.body: {[key:string]: any}`
body字段为请求体，一般get请求会忽略该字段

```typescript
this.http.post('/example', {
    params: {
        key: 'value'
    },
    body: {
        name: '张三',
        password: '123456'
    }
}).then(response => {
    // do Something
}, error => {
    // do Something
})
```

所有实例方法，均返回`Promise`实例。

+ `get(url: string, options?: UiRequestOptions): Promise<any>`;
+ `post(url: string, options?: UiRequestOptions): Promise<any>`;
+ `put(url: string, options?: UiRequestOptions): Promise<any>`;
+ `delete(url: string, options?: UiRequestOptions): Promise<any>`;
+ `upload(url: string, options?: UiRequestOptions): Promise<any>`;

