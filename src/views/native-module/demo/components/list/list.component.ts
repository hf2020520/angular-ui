import { Component } from '@angular/core';
import { NavController } from 'tanbo-ui';
import { DetailComponent } from '../detail/detail.component';

@Component({
    templateUrl: './list.component.html'
})
export class ListComponent {
    constructor(private navController: NavController) {
    }

    toPage() {
        this.navController.push(DetailComponent);
    }
}