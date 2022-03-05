import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SideMenuOption } from './models/side-menu-option';

@Component({
    selector: 'custom-side-menu',
    templateUrl: './custom-side-menu.component.html',
    styleUrls: ['./custom-side-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSideMenuComponent {
    optionHeight = 45;
    paddingLeft = 16;
    @Input() menuList: Array<SideMenuOption>;
    @Input('color-type') colorType: 'primary' | 'warning' | 'secondary' = 'primary';

    constructor() {
    }

    toggle(item) {
        item.expanded = !item.expanded;
    }
}
