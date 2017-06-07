import { Component } from '@angular/core';
import { NavController } from 'tanbo-ui';

import { Child2Component } from '../child2/child2.component';

@Component({
    templateUrl: './child1.component.html'
})
export class Child1Component {
    constructor(private navController: NavController) {
    }

    toPage() {
        this.navController.push(Child2Component);
    }
}