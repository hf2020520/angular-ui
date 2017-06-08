import { Component, OnInit } from '@angular/core';
import { NavController } from 'tanbo-ui';

import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { Tab3Component } from '../tab3/tab3.component';
import { Tab4Component } from '../tab4/tab4.component';

import { PageTransferStationService, ViewConfig } from '../../../services/page-transfer-station.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    tab1 = Tab1Component;
    tab2 = Tab2Component;
    tab3 = Tab3Component;
    tab4 = Tab4Component;

    constructor(private pageTransferStationService: PageTransferStationService,
                private navController: NavController) {
    }

    ngOnInit() {
        this.pageTransferStationService.component$.subscribe((config: ViewConfig) => {
            this.navController.push(config.component);
        });
    }
}