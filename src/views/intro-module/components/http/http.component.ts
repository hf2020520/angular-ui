import { Component } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Component({
    templateUrl: './http.component.html'
})
export class HttpComponent {

    constructor(private http: UiHttp) {
    }

    getData() {
        this.http.get('/example').then(response => {
            alert('请求成功');
            console.log(response);
        }, error => {
            alert('请求出错了');
            console.log(error);
        });
    }
}