import { Component } from '@angular/core';
import { NavController } from 'tanbo-ui';

import { Child1Component } from './child1/child1.component';

@Component({
    templateUrl: './tab1.component.html'
})
export class Tab1Component {
    constructor(private navController: NavController) {
    }

    toPage() {
        this.navController.push(Child1Component);
    }
}