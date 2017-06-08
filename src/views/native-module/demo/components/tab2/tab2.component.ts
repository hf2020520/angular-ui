import { Component } from '@angular/core';
import { PageTransferStationService } from '../../../services/page-transfer-station.service';
import { ListComponent } from '../list/list.component';

@Component({
    templateUrl: './tab2.component.html'
})
export class Tab2Component {
    constructor(private pageTransferStationService: PageTransferStationService) {
    }

    toPage() {
        this.pageTransferStationService.push({
            component: ListComponent
        });
    }
}