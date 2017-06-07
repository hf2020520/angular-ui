import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
    selector: 'native-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
    rootPage = HomeComponent;
}